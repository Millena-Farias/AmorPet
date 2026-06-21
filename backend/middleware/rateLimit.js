import rateLimit from 'express-rate-limit'

const loginLimite = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 tentativas
    message: { erro: 'Muitas tentativas de login. Tente novamente em 15 minutos.' }
})

export default loginLimite