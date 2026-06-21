import express from 'express'

import agendamentoController from '../controllers/agendamentoController.js'

const rota = express.Router()

rota.post('/', agendamentoController.criarAgendamento)
rota.get('/', agendamentoController.listarAgendamento)

export default rota;