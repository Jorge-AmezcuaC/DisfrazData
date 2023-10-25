import Link from "next/link";

export default function Nav() {
    return(
        <nav>
            <div>
                <h3><Link href={'/inicio'}>DisfrazData</Link></h3>
            </div>
            <div>
                <input type="search" placeholder="search"/>
                <button>Buscar</button>
            </div>
            <div>
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