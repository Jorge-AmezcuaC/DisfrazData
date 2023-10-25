import Link from "next/link"
export default function NavSect() {
    return(
        <nav>
            <ul>
                <li><button><Link href={'/inicio/admin/agregarProducto'}>Agregar Producto</Link></button></li>
                <li><button><Link href={'/inicio/admin/modificarProducto'}>Modificar Producto</Link></button></li>
                <li><button><Link href={'/inicio/admin/outstock'}>OutStock</Link></button></li>
                <li><button><Link href={'/inicio/admin/contactarProveedor'}>Contactar Provedor</Link></button></li>
            </ul>
        </nav>
    )
}