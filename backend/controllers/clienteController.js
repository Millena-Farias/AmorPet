import Cliente from '../models/Cliente.js'


async function meuPerfil(req, res) {
    try{
     const cliente = await Cliente.findOne({where:{usuarioId: req.usuario.id}})
     if(!cliente){
        return res.status(404).json({ erro: 'usuario não tem perfil' })
     }
     res.status(200).json(cliente)
    }catch(error){
        res.status(500).json({ erro: 'usuario não tem perfil' })
}}
async function criarCliente(req, res) {
    const { nome, telefone, email } = req.body
    const usuarioId = req.usuario.id // Obtém o ID do usuário logado do token

    try {
        
        const cliente = await Cliente.create({ nome, telefone, email, usuarioId })
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
}

async function listarClientes(req, res) {
    try {

        const clientes = await Cliente.findAll({ where: { usuarioId: req.usuario.id } })
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
}

export default { criarCliente, listarClientes, meuPerfil }