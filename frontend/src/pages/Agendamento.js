import { useState, useEffect } from 'react'
import api from '../services/api'

function Agendamento() {
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [servico, setServico] = useState('')
    const [petId, setPetId] = useState('')
    const [pets, setPets] = useState([])
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        async function buscarPets() {
            const resposta = await api.get('/pets')
            setPets(resposta.data)
        }
        buscarPets()
    }, [])

    async function cadastrar(e) {
        if (!data || !hora || !servico || !petId){
            return setMensagem('campos obrigatorios')
        }
        e.preventDefault()
        try {
            await api.post('/agendamentos', { data, hora, servico, petId })
            setMensagem('Agendamento realizado com sucesso!')
        } catch (error) {
            setMensagem('Erro ao realizar agendamento — tente novamente')
        }
    }

    return (
        <div className="conteudo-form">
            <h1>Agende aqui!</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="data">Data:</label>
                    <input
                        type="date"
                        id="data"
                        onChange={(e) => setData(e.target.value)}
                    />
                    <div>
                        <label htmlFor="hora">Horário</label>
                        <select id="hora" onChange={(e) => setHora(e.target.value)}>
                            <option value="">Selecione o horário</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:40">10:40</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="19:00">19:00</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="servico">Serviço</label>
                        <select id="servico" onChange={(e) => setServico(e.target.value)}>
                            <option value="">Selecione o serviço que você deseja</option>
                            <option value="Banho">Banho</option>
                            <option value="Tosa">Tosa</option>
                            <option value="Banho e Tosa">Banho e Tosa</option>
                            <option value="Consulta de Rotina">Consulta de Rotina</option>
                            <option value="Consulta Veterinária">Consulta Veterinária</option>
                            <option value="Vacina">Vacina</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="petId">Pet</label>
                        <select id="petId" onChange={(e) => setPetId(e.target.value)}>
                            <option value="">Selecione o Pet</option>
                            {pets.map((pet) => (
                                <option key={pet.id} value={pet.id}>
                                    {pet.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Agendar" />
                    </div>
                    <div>
                        {mensagem && <p>{mensagem}</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Agendamento