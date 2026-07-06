import { useState } from 'react'
import api from '../services/api'
import { Link, useNavigate } from 'react-router-dom'

function Logar() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function logarPessoa(e) {
    e.preventDefault()
    if (!email || !senha  ){
        return setMensagem('Preencha os campos vazios')
    } if(!email.includes('@')){
        return setMensagem('Email inválido')
    } 
    try {
        // 1. Fazer login e salvar token
        const resposta = await api.post('/auth/login', { email, senha })
        localStorage.setItem('token', resposta.data.token)

        // 2. Verificar se tem perfil
        try {
            await api.get('/clientes/meu-perfil')
            navigate('/dashboard')
        } catch (error) {
           navigate('/clientes')
        }

    }  catch (error) {
    const status = error.response?.status
    if (status === 404) {
        setMensagem('Email não cadastrado')
    } else if (status === 401) {
        setMensagem('Senha incorreta')
    } else {
        setMensagem('Erro ao logar, tente novamente')
    }
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