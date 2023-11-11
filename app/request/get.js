const host = 'http://127.0.0.1:8000/'
const talla = 'Talla/'
const disfraces = 'Disfraces/'
const proveedores = 'Proveedores/'
const ventas = 'Ventas/'
const ventaProducto = 'VentaProducto/'
const notificaciones = 'Notificaciones/'
const carro = 'carro/'
const carroDisfraz = 'DisfrazTalla/'

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

async function getCarro() {
    const res = await fetch(`${host}${carro}`, {cache: "no-store", })
    const data = await res.json()
    return data
}

async function getDisfrazCarro(id) {
    const res = await fetch(`${host}${carroDisfraz}${id}/`, {cache: 'no-store'})
    const data = await res.json()
    const {disfraz} = data
    const res2 = await fetch(`${host}${disfraces}${disfraz}/`, {cache: 'no-store'})
    const data2 = await res2.json()
    return {data2, data}
}

async function SearchDisfraz(params) {
    const res = await fetch(`${host}${disfraces}?search=${params}`, {cache: 'no-store'})
    const data = await res.json()
    return data
}

export {getDisfraces, getProveedor, getTalla, getDisfrazById, getNotification, getCarro, getDisfrazCarro, SearchDisfraz}