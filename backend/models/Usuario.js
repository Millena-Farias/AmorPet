import {DataTypes} from 'sequelize'

import sequelize from './bd.js'

const Usuario = sequelize.define('usuario', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false

    },
    email:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
   tipo: {
    type: DataTypes.ENUM('admin', 'cliente'),
    allowNull: false,
    defaultValue: 'cliente'
}

},{
     freezeTableName: true
})

export  default Usuario