import Link from "next/link"
import './navsection.css'
import {FaRegPlusSquare, FaRegEdit, FaCube, FaRegEnvelope} from "react-icons/fa";

export default function NavSect() {
    return(
        <nav className="navsect">
            <ul className="navsect-options">
                <li className="navsect-title">Administracion</li>
                <li><Link href={'/inicio/admin/agregarProducto'}><button><FaRegPlusSquare size={15}/>Agregar Producto</button></Link></li>
                <li><Link href={'/inicio/admin/modificarProducto'}><button><FaRegEdit size={15}/>Modificar Producto</button></Link></li>
                <li><Link href={'/inicio/admin/outstock'}><button><FaCube size={15}/>OutStock</button></Link></li>
                <li><Link href={'/inicio/admin/contactarProveedor'}><button><FaRegEnvelope size={15}/>Contactar Provedor</button></Link></li>
            </ul>
        </nav>
    )
}