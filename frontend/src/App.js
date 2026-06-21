import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  Agendamento from './pages/Agendamento'
import CadastroCliente from './pages/CadastroCliente'
import CadastroPet from './pages/CadastroPet'
import ListarAgendamento from './pages/ListaAgendamentos'
import Registrar from './pages/Registro'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NavBar from './components/Navbar'
function App() {
  return (
     
   <BrowserRouter>
    <NavBar />
   <Routes>

<Route path="/clientes" element={<CadastroCliente />} />
<Route path="/pets" element={<CadastroPet />} />
<Route path="/agendamentos" element={<Agendamento />} />
<Route path="/lista" element={<ListarAgendamento />} />
<Route path="/registro" element={<Registrar />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />

   </Routes>
   </BrowserRouter>
 
  );
 
}

export default App;
