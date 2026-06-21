import { useState, useEffect } from 'react'
import axios from 'axios'

function CadastrarPet() {
    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [clienteId, setClienteId] =useState('')
    const [clientes, setClientes] = useState([])
    const [mensagem, setMensagem] =useState('')

useEffect(() => {
    async function buscarClientes() {
        const resposta = await axios.get('http://localhost:3001/clientes')
        setClientes(resposta.data)
    }
    buscarClientes()
}, [])
async function cadastrar(e) {
    e.preventDefault()
    try {
        await axios.post('http://localhost:3001/pets', {
            nome,
            especie,
            raca,
            clienteId

        })
        setMensagem('Pet cadastrado com sucesso!')
    } catch (error) {
        setMensagem('Erro ao cadastrar pet')
    }

}

return(
    <div>
        <h1>Cadastre seu Pet aqui</h1>
        <form onSubmit={cadastrar}>
<div>
    <label htmlFor="nome">Nome:</label>
    <input
    type="text"
    id="nome"
    placeholder="digite seu nome"
    onChange={(e)=> setNome(e.target.value)}
    />
    <div>
        <label htmlFor="especie">Especie</label>
        <input
        type="text"
        id="especie"
        placeholder="Digite a especie do seu pet"
        onChange={(e)=> setEspecie(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor="raca">Raça</label>
        <input
        type="text"
        id="raca"
        onChange={(e)=>setRaca(e.target.value)}
        />
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
    )}
export default CadastrarPet
