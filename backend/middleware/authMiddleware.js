import jwt from 'jsonwebtoken'

export function  autenticarToken(req,res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.status(401).json({erro: 'Acesso negado. Token não fornecido.'})
    }
    try{
        const decorrido = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decorrido
        next()
    } catch(error){
        res.status(403).json({erro: 'Token inválido ou expirado'})
    }
}