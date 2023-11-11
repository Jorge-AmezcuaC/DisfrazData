import Link from "next/link";
import './nav.css'
import UserCard from "../user/userCard";
import { FaCubes, FaShoppingBasket, FaUser,} from "react-icons/fa";
import InputNav from "./InputNav";

export default function Nav() {
    // const username = Cookies.get('username')
    const username = "Mi Perfil"
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h3>
                    <Link href={'/inicio'} className="navbar-title">DisfrazData</Link>
                </h3>
            </div>
            <InputNav/>
            <div className="navbar-options">
                <ul>
                    <li>
                        <Link href={'/inicio/admin'}><FaCubes color="#fff" size={40}/></Link>
                    </li>
                    <li>
                        <Link href={'/inicio/carro'}><FaShoppingBasket color="#fff" size={40}/></Link>
                    </li>
                    <li>
                        <div><FaUser color="#fff" size={40}/><UserCard username={username}/></div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}