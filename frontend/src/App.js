import './App.css';

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Agendamento from './pages/Agendamento'
import CadastroCliente from './pages/CadastroCliente'
import CadastroPet from './pages/CadastroPet'
import ListarAgendamento from './pages/ListaAgendamentos'
import Registrar from './pages/Registro'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NavBar from './components/Navbar'

function Layout() {
  const location = useLocation()
  const semNavbar = ['/login', '/registro']

  return (
    <>
      {!semNavbar.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="/clientes" element={<CadastroCliente />} />
        <Route path="/pets" element={<CadastroPet />} />
        <Route path="/agendamentos" element={<Agendamento />} />
        <Route path="/lista" element={<ListarAgendamento />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App;
