"use client"
import { useRouter } from "next/navigation"

const BtnDelete = (props) => {
    const host = 'http://localhost:8000/'
    const carro = 'carro/'
    const router = useRouter()

    function deleteCarroItem(id) {
        fetch(`${host}${carro}${id}/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(() => router.refresh())
    }

    return <button className="vt-delete" onClick={() => deleteCarroItem(props.id)}>Eliminar</button>
}

export default BtnDelete