import express from 'express'

import clienteController from '../controllers/clienteController.js'
const rota = express.Router()

rota.post ('/', clienteController.criarCliente)
rota.get('/', clienteController.listarClientes)


export default rota