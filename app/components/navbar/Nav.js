import Link from "next/link";
import './nav.css'
import { FaCubes, FaShoppingBasket, FaUser, FaSearch} from "react-icons/fa";

export default function Nav() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h3>
                    <Link href={'/inicio'} className="navbar-title">DisfrazData</Link>
                </h3>
            </div>
            <div className="navbar-search">
                <button><FaSearch/></button>
                <input type="search" placeholder="search"/>
            </div>
            <div className="navbar-options">
                <ul>
                    <li>
                        <Link href={'/inicio/admin'}><FaCubes color="#fff" size={40}/></Link>
                    </li>
                    <li>
                        <Link href={'/inicio/carro'}><FaShoppingBasket color="#fff" size={40}/></Link>
                    </li>
                    <li>
                        <button><FaUser color="#fff" size={40}/></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}