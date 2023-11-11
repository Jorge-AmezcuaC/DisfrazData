"use client"
import { useRouter } from "next/navigation"

const GroupBtn = (props) => {
    const router = useRouter()
    const host = 'http://localhost:8000/'
    const carro = 'carro/'

    const refresh = () => {
        router.refresh()
    }

    const clean = () => {
        props.data.map(item => {
            fetch(`${host}${carro}${item.id}/`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        })
        router.refresh()
    }

    const create = () => {

    }

    return(
        <div>
          <button className="venta-gen" onClick={create}>Generar Venta</button>
          <button className="venta-clean" onClick={clean}>Limpiar Venta</button>
          <button className="venta-refresh" onClick={refresh}>Refrescar</button>
        </div>
    )
}

export default GroupBtn