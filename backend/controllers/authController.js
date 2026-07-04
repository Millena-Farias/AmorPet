import Usuario from '../models/Usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function registrar(req, res) {
    const { nome, email, senha, tipo } = req.body

    

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        const usuario = await Usuario.create({
            nome,
            email,
            senha: senhaCriptografada,
            tipo
        })
        res.status(201).json(usuario)
    } catch (error) {
        res.status(400).json({ erro: error.message })
    }
}

async function login(req, res) {
    const { email, senha } = req.body
    try {
        const usuario = await Usuario.findOne({ where: { email } })
        if (!usuario) {
            return res.status(404).json({ erro: 'usuario não encontrado' })
        }
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
        if (!senhaCorreta) {
            return res.status(401).json({ erro: 'Senha errada' })
        }
        const token = jwt.sign(
            { id: usuario.id, tipo: usuario.tipo },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({ token })
    } catch (error) {
        res.status(400).json({ erro: error.message })
    }
}

export default { registrar, login }


