import { Link } from 'react-router-dom'

function NavBar() {
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
                    <Link to="/Sair">Sair</Link>
                </li>
            </ul>



        </nav>

    )
}


export default NavBar