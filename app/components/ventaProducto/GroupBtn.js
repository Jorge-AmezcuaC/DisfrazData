"use client"
import { useRouter } from "next/navigation"

const GroupBtn = (props) => {
    const router = useRouter()
    const host = 'http://localhost:8000/'
    const carro = 'carro/'
    const ventaProducto = 'VentaProducto/'
    const venta = 'Ventas/'
    const disfrazTalla = 'DisfrazTalla/'
    const notificaciones = 'PostNotificaciones/'
    const disfraz = 'Disfraces/'

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
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const newCurrentDate = new Date()
        const year = newCurrentDate.getFullYear();
        const month = String(newCurrentDate.getMonth() + 1).padStart(2, '0');
        const day = String(newCurrentDate.getDate()).padStart(2, '0');
        const outDate = `${year}-${month}-${day}`;
        fetch(`${host}${venta}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({empleado: 1, Fecha: formattedDate})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            props.data.map(item => {
                fetch(`${host}${disfrazTalla}${item.disfraz}/`)
                .then(response => response.json())
                .then(dis => {
                    fetch(`${host}${ventaProducto}`, {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            cantidad: item.cantidad,
                            subtotal: item.cantidad*dis.precio,
                            venta: data.id,
                            producto: item.disfraz
                        })
                    })
                    .then(res => res.json())
                    .then(() => {
                        fetch(`${host}${disfrazTalla}${item.disfraz}/`, {
                            method: "PATCH",
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify({
                                cantidad: dis.cantidad-item.cantidad
                            })
                        })
                        .then(responses => responses.json())
                        .then(newCount => {
                            if(newCount.cantidad < newCount.minStock){
                                fetch(`${host}${disfraz}${newCount.disfraz}/`)
                                .then(ress => ress.json())
                                .then(prov => {
                                    fetch(`${host}${notificaciones}`, {
                                        method: "POST",
                                        headers: {'Content-Type':'application/json'},
                                        body: JSON.stringify({
                                            Mensaje: "OutStock!",
                                            Estado: false,
                                            Fecha: outDate,
                                            proveedor: prov.proveedor,
                                            producto: prov.id
                                        })
                                    })
                                    .then(respuesta => respuesta.json())
                                    .then(data => console.log(data))
                                })
                            }
                        })
                    })
                })
            })
        })
        .then(() => clean())
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