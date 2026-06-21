import { useState } from 'react'
import axios from 'axios'

function CadastroCliente() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function cadastrar(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/clientes', {
                nome,
                telefone,
                email
            })
            setMensagem('Cliente cadastrado com sucesso!')
        } catch (error) {
            setMensagem('Erro ao cadastrar o cliente')
        }

    }

    return (
        <div>
            <h1>Cadastre aqui!</h1>
            <form onSubmit={cadastrar}>
                <div>

                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="digite seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <div>
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            placeholder="Digite seu telefone"
                            maxLength={11}

                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                    <div>
                        {mensagem && <p>{mensagem}</p>}

                    </div>
                </div>
            </form>


        </div>

    )

}
export default CadastroCliente