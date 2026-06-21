import Agendamento from './Agendamento.js'
import Cliente from './Cliente.js'
import Pet from './Pet.js'

Cliente.hasMany(Pet, { foreignKey: 'clienteId' })
Pet.belongsTo(Cliente, { foreignKey: 'clienteId' })

Pet.hasMany(Agendamento, { foreignKey: 'petId' })
Agendamento.belongsTo(Pet, { foreignKey: 'petId' })

Cliente.hasMany(Agendamento, { foreignKey: 'clienteId' })
Agendamento.belongsTo(Cliente, { foreignKey: 'clienteId' })


export  {Cliente, Pet, Agendamento}