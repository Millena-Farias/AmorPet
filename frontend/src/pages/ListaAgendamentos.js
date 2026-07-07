import { useState, useEffect } from 'react'
import api from '../services/api'

function ListaAgendamentos() {
    const [agendamentos, setAgendamentos] = useState([])

    useEffect(() => {
        async function listarAgendamentos() {
            const resposta = await api.get('/agendamentos')
            setAgendamentos(resposta.data)
        }
        listarAgendamentos()
    }, [])

    return (
        <div>
            <h1>Agendamentos</h1>
            {agendamentos.map((agendamento) => (
                <div key={agendamento.id}>
                    <p>Pet: {agendamento.Pet?.nome || 'Não especificado'}</p>
                    <p>Dono: {agendamento.cliente?.nome || 'Não especificado'}</p>
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