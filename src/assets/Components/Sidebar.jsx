import { NavLink } from "react-router-dom"

export default function Sidebar({ name, theme }) {
    return (
        <div className={"sidebar-desk-wrapper sidebar col-md-2 d-none d-md-block"}>
            <nav className="nav flex-column">
                <NavLink className="link-sidebar nav-link" to="/">Dashboard</NavLink>
                <NavLink className="link-sidebar nav-link" to="/transactions">Transazioni</NavLink>
                <NavLink className="link-sidebar nav-link" to="/settings">Impostazioni</NavLink>
            </nav>
            <div className="sidebar-footer text-center ">
                <p className="welcome-text">Benvenuto,  <NavLink to="/settings" className="welcome-link">
                    <span>{name || "Collega le tue informazioni dalle impostazioni"}</span>
                </NavLink>!</p>
            </div>

        </div>
    )
} 