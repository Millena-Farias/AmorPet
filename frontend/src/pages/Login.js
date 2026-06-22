import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Logar() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function logarPessoa(e) {
        e.preventDefault()
        try {
            const resposta = await axios.post('http://localhost:3001/auth/login', {
                email,
                senha
            })

            localStorage.setItem('token', resposta.data.token)
            navigate('/dashboard')
        } catch (error) {
            setMensagem('Erro ao logar')
        }
    }
  return (
    <div className="login-container">
        <div className="login-lado-esquerdo">
            <img src="gatos.png" alt="gatos" style={{width: '80%'}}></img>
        </div>
        <div className="login-lado-direito">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={logarPessoa}>
                    <div>
                        <label>Email:</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <input type="submit" value="Logar" />
                    {mensagem && <p>{mensagem}</p>}
                </form>
                <p>Não tem conta? <Link to="/registro">Cadastre-se</Link></p>
            </div>
        </div>
    </div>
)


}
export default Logar