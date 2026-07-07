import { Cliente, Pet, Agendamento } from '../models/relacionamentos.js'

async function criarAgendamento(req, res) {
    const { data, hora, servico, petId } = req.body
    
    try {
        const cliente = await Cliente.findOne({ where: { usuarioId: req.usuario.id } })
        if (!cliente) {
            return res.status(404).json({ erro: 'Perfil de cliente não encontrado.' })
        }

        // Cria o agendamento associando automaticamente ao cliente logado
        const agendamento = await Agendamento.create({ 
            data, 
            hora, 
            servico, 
            petId, 
            clienteId: cliente.id 
        }) 
        res.status(201).json(agendamento)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
}

async function listarAgendamento(req, res) {
    try {
        const cliente = await Cliente.findOne({ where: { usuarioId: req.usuario.id } })
        if (!cliente) {
            return res.status(404).json({ erro: 'Perfil de cliente não encontrado.' })
        }

        
        const agendamentos = await Agendamento.findAll({
            where: { clienteId: cliente.id, status: 'pendente' },
            include: [
                { model: Pet },
                { model: Cliente }
            ]
        })
        res.status(200).json(agendamentos)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }

}

async function atualizarStatus(req, res){
    const  id = req.params.id
    const status = req.body.status
    
    try{
         const agendamento = await Agendamento.findOne({ where: { id } })
         if(!agendamento) {
    return res.status(404).json({ erro: 'Agendamento não encontrado' })
}
          await agendamento.update({ status })
          return res.status(200).json(agendamento)
}
catch(error){
    return res.status(501).json({erro: error.message})

}
}

export default { criarAgendamento, listarAgendamento, atualizarStatus}

