import { DataTypes } from  'sequelize'
import sequelize from './bd.js'

const Pet=  sequelize.define('Pet',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nome:{
type: DataTypes.STRING(100),
allowNull: false
    },
    especie:  {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    raca:{
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        type:DataTypes.INTEGER,
        references:{
            model:'cliente',
            key:'id'
        }
       
    },
}, {
    freezeTableName: true
})
export default Pet