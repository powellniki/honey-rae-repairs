import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return <ul className="navbar">
        <li className="navbar-info">
            <Link to='/tickets'>Tickets</Link>
        </li>
        <li className="navbar-info">
            <Link to="/customers">Customers</Link>
        </li>
        <li className="navbar-info">
            <Link to="/employees">Employees</Link>
        </li>
    </ul>
}
