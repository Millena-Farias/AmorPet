import Pet from '../models/Pet.js'
import Cliente from '../models/Cliente.js'

async function criarPet(req, res) {
    const { nome, especie, raca } = req.body
    
    try {
        // Acha o cliente vinculado ao usuário logado
        const cliente = await Cliente.findOne({ where: { usuarioId: req.usuario.id } })
        if (!cliente) {
            return res.status(404).json({ erro: 'Perfil de cliente não encontrado.' })
        }

        // Cria o pet associado a esse cliente
        const pet = await Pet.create({ nome, especie, raca, clienteId: cliente.id })
        res.status(201).json(pet)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
}

async function listarPet(req, res) {
    try {
        const cliente = await Cliente.findOne({ where: { usuarioId: req.usuario.id } })
        if (!cliente) {
            return res.status(404).json({ erro: 'Perfil de cliente não encontrado.' })
        }

        
        const pets = await Pet.findAll({ where: { clienteId: cliente.id } })
        res.status(200).json(pets)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
}

export default { criarPet, listarPet }