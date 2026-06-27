import express from 'express'
import agendamentoController from '../controllers/agendamentoController.js'
import { autenticarToken } from '../middleware/authMiddleware.js'

const rota = express.Router()

rota.post('/', autenticarToken, agendamentoController.criarAgendamento)
rota.get('/', autenticarToken, agendamentoController.listarAgendamento)
rota.patch('/:id/status', autenticarToken, agendamentoController.atualizarStatus)

export default rota;