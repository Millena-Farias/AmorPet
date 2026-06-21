import axios from 'axios'
import {useState, useEffect} from 'react'

function Dashboard() {
    const [agendamentos, setAgendamentos] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function buscarAgendamentos() {
            const resposta = await axios.get('http://localhost:3001/agendamentos')
            setAgendamentos(resposta.data)
        }
        async function buscarPets() {
            const resposta = await axios.get('http://localhost:3001/pets')
            setPets(resposta.data)
        }
        buscarAgendamentos()
        buscarPets()
    }, [])

    return (
          <div className="conteudo">
        <h1>AmorPet 🐾</h1>
        <div className="cards">
            <div className="card">
                <h2>{agendamentos.length}</h2>
                <p>Agendamentos</p>
            </div>
            <div className="card">
                <h2>{pets.length}</h2>
                <p>Pets</p>
            </div>
        </div>
        <h2>Próximos Agendamentos</h2>
        {agendamentos.map((agendamento) => (
            <div className="agendamento-card" key={agendamento.id}>
                <p>🐾 Pet: {agendamento.Pet.nome}</p>
                <p>✂️ Serviço: {agendamento.servico}</p>
                <p>📅 Data: {agendamento.data}</p>
                <p>🕐 Hora: {agendamento.hora}</p>
            </div>
        ))}
    </div>
    )
}

export default Dashboard