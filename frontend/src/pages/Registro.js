import { useState } from 'react'
import axios from 'axios'

function Registrar() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function registrarPessoa(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/auth/registrar', {
                nome,
                email,
                senha
            })
            setMensagem('Cadastro realizado com sucesso!')
        } catch (error) {
            setMensagem('Erro ao cadastrar')
        }
    }
return(
    <div>
        <h1> Crie sua conta</h1>
        <form onSubmit={registrarPessoa}>
            <div>
                <label>Nome:</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)} />
        
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" onChange={(e)=> setSenha(e.target.value)} />
            </div>
            <input type="submit" value="Cadastrar" />
            {mensagem && <p> {mensagem} </p>}
        </form>
    </div>
)


}
export default Registrar