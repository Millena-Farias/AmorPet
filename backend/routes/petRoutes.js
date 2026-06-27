import express from 'express'
import petController from '../controllers/petController.js'
import { autenticarToken } from '../middleware/authMiddleware.js'
const rota = express.Router()

rota.post('/', autenticarToken, petController.criarPet)
rota.get('/', autenticarToken, petController.listarPet)

export default rota