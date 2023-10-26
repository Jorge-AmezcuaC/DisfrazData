import Link from "next/link";
import './nav.css'

export default function Nav() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h3>
                    <Link href={'/inicio'} className="navbar-title">DisfrazData</Link>
                </h3>
            </div>
            <div className="navbar-search">
                <button>🔎</button>
                <input type="search" placeholder="search"/>
            </div>
            <div className="navbar-options">
                <ul>
                    <li>
                        <button><Link href={'/inicio/admin'}>Inventario</Link></button>
                    </li>
                    <li>
                        <button><Link href={'/inicio/carro'}>Carro</Link></button>
                    </li>
                    <li>
                        <button>Profile</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}