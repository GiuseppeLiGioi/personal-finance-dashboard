import { useState } from "react"
import { Link } from "react-router-dom"

export default function HamburgerMobile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="hamburger-wrapper">
            <button type="submit" className="btn-hamburger btn d-md-none" onClick={() => setIsOpen(!isOpen)}>☰</button>
            {
                isOpen && (
                    <ul className="ul-list-hamburger">
                        <li><Link to={"/"} className="link-hamburger" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                        <li><Link to={"/transactions"} className="link-hamburger" onClick={() => setIsOpen(false)}>Transazioni</Link></li>
                        <li><Link to={"/settings"} className="link-hamburger" onClick={() => setIsOpen(false)}>Impostazioni App</Link></li>
                    </ul>
                )
            }
        </div>
    )
}