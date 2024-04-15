import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-link">
                <Link className="navbar-link" to="/tickets">Tickets</Link>
            </li>
            {localStorage.getItem("honey_user") ? (
                <li className="navbar-info navbar-logout">
                    {/* when the user clicks on the link, remove honey_user from local storage which logs them out */}
                    <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("honey_user")
                        navigate("/", { replace: true })
                    }}
                    >
                    Logout
                    </Link>
                </li>
            ) : (
                ""
            )}

        </ul>
    )
}