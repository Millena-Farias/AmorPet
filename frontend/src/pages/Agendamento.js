import { useState, useEffect } from 'react'
import axios from 'axios'

function Agendamento() {
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [servico, setServico] = useState('')
    const [petId, setPetId    ] = useState('')
    const [clienteId, setClienteId] = useState('')
    const [pets, setPets] = useState([])
    const [clientes, setClientes] = useState([])
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        async function buscarClientes() {
            const resposta = await axios.get('http://localhost:3001/clientes')
            setClientes(resposta.data)
        }
        buscarClientes()
    }, [])

    useEffect(() => {
        async function buscarPets() {
            const resposta = await axios.get('http://localhost:3001/pets')
            setPets(resposta.data)
        }
        buscarPets()
    }, [])
    async function cadastrar(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/agendamentos', {
                data,
                hora,
                servico,
                petId,
                clienteId

            })
            setMensagem('Pet cadastrado com sucesso!')
        } catch (error) {
            setMensagem('Erro ao cadastrar pet')
        }

    }

    return (
        <div>
            <h1>Cadastre seu Pet aqui</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="Data">Data:</label>
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
                            <option value="16:30">16:30</option>
                            <option value="15:00">15:00</option>
                            <option value="19:00">19:00</option>
                            <option value="17:00">17:00</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="servico">Serviço</label>
                        <select id="servico" onChange={(e) => setServico(e.target.value)}>
                            <option value="">Selecione o Serviço que voce deseja</option>
                            <option value="Banho">Banho</option>
                            <option value="Tosa">Tosa</option>
                            <option value="Banho e Tosa">Banho e Tosa</option>
                            <option value="Consulta de Rotina">Consulta de Rotina</option>
                            <option value="Constulta Veterinaria">Constulta Veterinaria</option>
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
                        <label htmlFor="clienteId">Dono do Pet</label>
                        <select id="clienteId" onChange={(e) => setClienteId(e.target.value)}>
                            <option value="">Selecione o dono</option>
                            {clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                    <div>
                        {mensagem && <p>  {mensagem} </p>}
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Agendamento