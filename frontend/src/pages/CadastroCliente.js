import { useState } from 'react'
import api from '../services/api'
import {useNavigate} from 'react-router-dom'

function CadastroCliente() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('')

    async function cadastrar(e) {
    e.preventDefault()

    // validações antes de enviar
    if (!nome || !telefone || !email) {
        return setMensagem('Todos os campos são obrigatórios')
    }

    if (telefone.length < 10) {
        return setMensagem('Telefone inválido — mínimo 10 dígitos com DDD')
    }

    if (!email.includes('@')) {
        return setMensagem('Email inválido')
    }

    try {
        await api.post('/clientes', {
            nome,
            telefone,
            email
        })
        setMensagem('Cliente cadastrado com sucesso!')
        navigate('/pets')
    } catch (error) {
        setMensagem('Erro ao cadastrar — tente novamente')
    }
}

    return (
        <div className="completar-cliente">
            <h1>Complete seu perfil!</h1>
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