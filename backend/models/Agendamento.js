import { DataTypes } from 'sequelize'
import sequelize from './bd.js'

const Agendamento = sequelize.define('Agendamento',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    data:{
type:DataTypes.DATEONLY,
allowNull:false
    },
    hora:{
        type:DataTypes.STRING,
        allowNull:false
    },
    servico:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    petId:{
        type:DataTypes.INTEGER,
        references:{
            model:'pet',
            key:'id'
        }
    },
    clienteId:{
        type:DataTypes.INTEGER,
        references:{
            model:'cliente',
            key:'id'
        }
    }
},
{freezeTableName: true}
)
export default Agendamento;