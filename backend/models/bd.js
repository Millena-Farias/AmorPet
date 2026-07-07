import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql'
    }
)

async function testarConexao(){
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida')
    } catch(erro){
        console.error('Não foi possivel conectar', erro)
    }
}
testarConexao()
export default sequelize 