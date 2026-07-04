import { Link, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'

function NavBar() {
    const navigate = useNavigate()
    function sair(){
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <motion.nav
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-logo">
                
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/agendamentos">Agendamentos</Link>
                </li>
                <li>
                    <Link to="/pets">Pets</Link>
                </li>
                <li>
                   <button onClick={sair}>Sair</button>
                </li>
            </ul>
        </motion.nav>
    )
}

export default NavBar