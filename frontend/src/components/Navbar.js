import { Link, useNavigate} from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    function sair(){
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <nav>
            <h2>.</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard </Link>
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



        </nav>

    )
}


export default NavBar