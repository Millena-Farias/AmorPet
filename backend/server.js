import express from 'express';
import sequelize from './models/bd.js'
import clienteRoutes from './routes/clienteRoutes.js'
import petRoutes from './routes/petRoutes.js'
import agendamentoRoutes from './routes/agendamentoRoutes.js'
import authRoutes from './routes/authRoutes.js'
import Usuario from './models/Usuario.js'
import Cliente from './models/Cliente.js'
import Pet from './models/Pet.js'
import Agendamento from './models/Agendamento.js'
import './models/relacionamentos.js'
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
        console.log("Conexão estabelecida com sucesso")
        await Usuario.sync({ alter: true })
        await Cliente.sync({ alter: true })
        await Pet.sync({ alter: true })
        await Agendamento.sync({ alter: true })
        app.listen(process.env.PORT || 3001, ()=>{
            console.log("servidor rodando")
        })
    }catch(error){
        console.error("não foi possivel estabelecer uma conexão")
        console.log(error)
    }
}
testarConexao()

