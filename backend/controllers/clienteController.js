import Cliente from '../models/Cliente.js'

async function criarCliente(req, res) {
    
const  {nome, telefone, email} = req.body
try{
    const cliente = await Cliente.create({nome, telefone, email})
    res.status(201).json(cliente)

}catch(error){
    res.status(500).json({erro: error.message})
}
}

async function listarClientes(req,res){
   
    try{
        const cliente= await Cliente.findAll()
        res.status(200).json(cliente)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}







export default {criarCliente, listarClientes}