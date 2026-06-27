import express from 'express'

import clienteController from '../controllers/clienteController.js'
import {autenticarToken} from '../middleware/authMiddleware.js'
const rota = express.Router()

rota.post ('/', autenticarToken, clienteController.criarCliente)
rota.get('/', autenticarToken, clienteController.listarClientes)
rota.get('/meu-Perfil', autenticarToken, clienteController.meuPerfil)

export default rota