import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  Agendamento from './pages/Agendamento'
import CadastroCliente from './pages/CadastroCliente'
import CadastroPet from './pages/CadastroPet'
import ListarAgendamento from './pages/ListaAgendamentos'
import Registrar from './pages/Registro'
import Login from './pages/Login'
function App() {
  return (
     
   <BrowserRouter>
   <Routes>

<Route path="/clientes" element={<CadastroCliente />} />
<Route path="/pets" element={<CadastroPet />} />
<Route path="/agendamentos" element={<Agendamento />} />
<Route path="/lista" element={<ListarAgendamento />} />
<Route path="/registro" element={<Registrar />} />
<Route path="/login" element={<Login />} />

   </Routes>
   </BrowserRouter>
 
  );
 
}

export default App;
