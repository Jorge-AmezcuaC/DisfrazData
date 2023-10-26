import Link from "next/link"
import './navsection.css'

export default function NavSect() {
    return(
        <nav className="navsect">
            <ul className="navsect-options">
                <li className="navsect-title">Administracion</li>
                <li><Link href={'/inicio/admin/agregarProducto'}><button>Agregar Producto</button></Link></li>
                <li><Link href={'/inicio/admin/modificarProducto'}><button>Modificar Producto</button></Link></li>
                <li><Link href={'/inicio/admin/outstock'}><button>OutStock</button></Link></li>
                <li><Link href={'/inicio/admin/contactarProveedor'}><button>Contactar Provedor</button></Link></li>
            </ul>
        </nav>
    )
}