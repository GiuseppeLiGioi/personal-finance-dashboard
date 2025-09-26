import HamburgerMobile from "./HamburgerMobile"

export default function Header() {
    return (
        <nav className="navbar d-flex justify-content-between align-items-center px-3">
            <h1 className="header-title">FINANCE DASHBOARD</h1>
            <HamburgerMobile />
        </nav>
    )
}