const host = 'http://127.0.0.1:8000/'
const talla = 'Talla/'
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

async function getProveedor() {
    const res = await fetch(`${host}${proveedores}`, {cache: 'no-store'})
    const data = await res.json()
    return data
}

async function getTalla(){
    const res = await fetch(`${host}${talla}`)
    const data = await res.json()
    return data
}

async function getDisfrazById(id) {
    const res = await fetch(`${host}${disfraces}${id}/`, {cache: 'no-store'})
    const data = await res.json()
    return data
}

async function getNotification() {
    const res = await fetch(`${host}${notificaciones}`, {cache: 'no-store'})
    const data = await res.json()
    return data
}

export {getDisfraces, getProveedor, getTalla, getDisfrazById, getNotification}