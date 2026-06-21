import  Pet from '../models/Pet.js'

async function criarPet(req , res){
const {nome, especie, raca, clienteId} = req.body
try{
    const pet = await Pet.create({nome, especie, raca, clienteId})
    res.status(201).json(pet)
}catch(error){
    res.status(500).json({erro: error.message})
}
}

async function listarPet (req, res){
 try{
        const pet= await Pet.findAll()
        res.status(200).json(pet)
    }catch(error){
        res.status(500).json({error: error.message})
    }

}
export default {criarPet, listarPet}