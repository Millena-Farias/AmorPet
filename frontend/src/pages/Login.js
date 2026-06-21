import { useState } from 'react'
import axios from 'axios'

function Logar() {

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
            setMensagem('Login realizado com sucesso!')
        } catch (error) {
            setMensagem('Erro ao logar')
        }
    }
    return (
        <div>
            <h1> Login </h1>
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
                {mensagem && <p> {mensagem} </p>}
            </form>
        </div>
    )


}
export default Logar