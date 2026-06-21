import express from 'express'

import authController from '../controllers/authController.js'
import loginLimite from '../middleware/rateLimit.js'
const rota = express.Router()

rota.post('/registrar', authController.registrar)
rota.post('/login', loginLimite,  authController.login)

export default rota