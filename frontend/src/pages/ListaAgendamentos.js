import { useState, useEffect } from 'react'
import axios from 'axios'

function ListaAgendamentos() {
    const [agendamentos, setAgendamentos] = useState([])

    useEffect(() => {
        async function listarAgendamentos() {
            const resposta = await axios.get('http://localhost:3001/agendamentos')
            setAgendamentos(resposta.data)
        }
        listarAgendamentos()
    }, [])

    return (
        <div>
            <h1>Agendamentos</h1>
            {agendamentos.map((agendamento) => (
                <div key={agendamento.id}>
                    <p>Pet: {agendamento.Pet.nome}</p>
                    <p>Dono: {agendamento.cliente.nome}</p>
                    <p>Serviço: {agendamento.servico}</p>
                    <p>Data: {agendamento.data}</p>
                    <p>Hora: {agendamento.hora}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default ListaAgendamentos