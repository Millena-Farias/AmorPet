import { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

function CadastrarPet() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function cadastrar(e) {
        e.preventDefault()

        if (!nome) {
            return setMensagem('Nome do pet é obrigatório')
        }
        if (!especie) {
            return setMensagem('Espécie é obrigatória')
        }
        if (!raca) {
            return setMensagem('Raça é obrigatória')
        }

        try {
            await api.post('/pets', { nome, especie, raca })
            setMensagem('Pet cadastrado com sucesso!')
            navigate('/dashboard')
        } catch (error) {
            setMensagem('Erro ao cadastrar pet — tente novamente')
        }
    }

    return (
        <div className="conteudo-form">
            <h1>Cadastre seu Pet aqui</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite o nome do pet"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <div>
                        <label htmlFor="especie">Espécie</label>
                        <input
                            type="text"
                            id="especie"
                            placeholder="Digite a espécie do seu pet"
                            onChange={(e) => setEspecie(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="raca">Raça</label>
                        <input
                            type="text"
                            id="raca"
                            onChange={(e) => setRaca(e.target.value)}
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

export default CadastrarPet
