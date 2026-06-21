import express from  'express';
import sequelize from './models/bd.js'
import clienteRoutes from './routes/clienteRoutes.js'
import petRoutes from './routes/petRoutes.js'
import agendamentoRoutes from './routes/agendamentoRoutes.js'
import authRoutes from './routes/authRoutes.js'
import   './models/relacionamentos.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', authRoutes)

app.use('/clientes', clienteRoutes)

app.use('/pets', petRoutes)
app.use('/agendamentos', agendamentoRoutes)


async function testarConexao(){
try{
    await sequelize.authenticate();
    console.log("Conexão estabelicida com sucesso")
    await sequelize.sync({ force: false })
    app.listen(3001, ()=>{
        console.log("servidor rodando na porta 3001")
    })
}catch(error){
    console.error("não foi possivel estabelecer uma conexão")
    console.log(error)
}
}
testarConexao()

