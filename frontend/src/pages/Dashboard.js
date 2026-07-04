import api from '../services/api'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Dashboard() {
    const [agendamentos, setAgendamentos] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function buscarAgendamentos() {
            const resposta = await api.get('/agendamentos')
            setAgendamentos(resposta.data)
        }
        async function buscarPets() {
            const resposta = await api.get('/pets')
            setPets(resposta.data)
        }
        buscarAgendamentos()
        buscarPets()
    }, [])

    async function atualizarStatus(id, status) {

        await api.patch('/agendamentos/' + id + '/status', { status })
        const resposta = await api.get('/agendamentos')
        setAgendamentos(resposta.data)
    }
    return (
        <div className="conteudo">
           <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
>
    AmorPet
</motion.h1>
            <div className="cards">
                <motion.div className="card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h2>{agendamentos.length}</h2>
                    <p>Agendamentos</p>
                </motion.div>
                <motion.div className="card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <h2>{pets.length}</h2>
                    <p>Pets</p>
                </motion.div>
            </div>
            <h2>Próximos Agendamentos</h2>
            {agendamentos.map((agendamento) => (
                <div className="agendamento-card" key={agendamento.id}>
                    <p><span className="agendamento-label">Pet:</span> {agendamento.Pet.nome}</p>
                    <p><span className="agendamento-label">Serviço:</span> {agendamento.servico}</p>
                    <p><span className="agendamento-label">Data:</span> {new Date(agendamento.data + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
                    <p><span className="agendamento-label">Hora:</span> {agendamento.hora}</p>
                    <div className="agendamento-acoes">
                        <button className="btn-concluir" onClick={() => atualizarStatus(agendamento.id, 'concluido')}>Concluído</button>
                        <button className="btn-cancelar" onClick={() => atualizarStatus(agendamento.id, 'cancelado')}>Cancelar</button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Dashboard