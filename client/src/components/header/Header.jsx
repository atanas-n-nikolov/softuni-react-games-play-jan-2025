import { Link } from "react-router"
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { email, isAuthenticated} = useAuth();
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>

                {isAuthenticated ? (<div id="user">
                    <Link to="/games/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                    {email}
                </div>) : (<div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>)}
            </nav>
        </header>
    )
}