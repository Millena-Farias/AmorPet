import {Cliente, Pet, Agendamento} from '../models/relacionamentos.js'
async function criarAgendamento(req,res){
    const {data, hora, servico, petId, clienteId} = req.body
    try{
        const agendamento = await Agendamento.create({data, hora, servico, petId, clienteId}) 
        res.status(201).json(agendamento)
    } catch(error){
res.status(500).json({erro:error.message})
    }
}

async function listarAgendamento(req,res){
    try{
const agendamento = await Agendamento.findAll({
    include: [
        {model:Pet},
        {model:Cliente}
    ]
})
res.status(200).json(agendamento)
    }catch(error){
        res.status(500).json({erro: error.message})
    }
}

export default {criarAgendamento, listarAgendamento}

