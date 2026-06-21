import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

async function testarConexao(){
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida')
    } catch(erro){
        console.error('Não foi possivel conectar', error)
    }
}
testarConexao()
export default sequelize 