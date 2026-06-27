import { useState } from 'react'
import api from '../services/api'
import {Link, useNavigate} from 'react-router-dom'

function Registrar() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function registrarPessoa(e) {
        e.preventDefault()
        try {
            await api.post('/auth/registrar', {
                nome,
                email,
                senha
            })
            setMensagem('Cadastro realizado com sucesso!')
            navigate('/login')
        } catch (error) {
            setMensagem('Erro ao cadastrar')
        }
    }
return(
  <div className="login-container">
            <div className="login-lado-esquerdo">
                <img src="/gatos.png" alt="gatos" />
            </div>
            <div className="login-lado-direito">
                <div className="login-box">
                    <h1>Crie sua conta</h1>
                    <form onSubmit={registrarPessoa}>
                        <div>
                            <label>Nome:</label>
                            <input type="text" onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input type="password" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <input type="submit" value="Cadastrar" />
                        {mensagem && <p>{mensagem}</p>}
                    </form>
                    <p>Já tem conta? <Link to="/login">Entrar</Link></p>
                </div>
            </div>
        </div>
)


}
export default Registrar