const host = 'http://127.0.0.1:8000/'
const disfraces = 'Disfraces/'
const proveedores = 'Proveedores/'
const ventas = 'Ventas/'
const ventaProducto = 'VentaProducto/'
const notificaciones = 'Notificaciones/'

async function getDisfraces() {
    const res = await fetch(`${host}${disfraces}`, {cache: 'no-store'})
    const data = await res.json()
    return data
}

export {getDisfraces}