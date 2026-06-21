import express from 'express'
import petController from '../controllers/petController.js'

const rota = express.Router()

rota.post('/', petController.criarPet)
rota.get('/', petController.listarPet)

export default rota