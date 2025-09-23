import { NavLink } from "react-router-dom"

export default function Sidebar(){
    return(
        <div className="sidebar col-md-2 d-none d-md-block">
            <nav className="nav flex-column">
                <NavLink className="nav-link" to="/">Dashboard</NavLink>
                <NavLink className="nav-link" to="/transactions">Transazioni</NavLink>
                <NavLink className="nav-link" to="/settings">Impostazioni</NavLink>
            </nav>

        </div>
    )
} 