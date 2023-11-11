const host = 'http://127.0.0.1:8000/'
const disfraces = 'Disfraces/'
const proveedores = 'Proveedores/'
const carro = 'carro/'
const fotos = 'fotos/'
const disfrazTalla = 'PostTallas/'

const postDisfraz = MainData => {
    fetch(`${host}${disfraces}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Nombre: MainData.Nombre, 
            Descripcion: MainData.Descripcion, 
            proveedor: MainData.proveedor
        })
    })
    .then(response => response.json())
    .then(data => {
        if(MainData.fotos[0]){
            const dataForm = new FormData();
            dataForm.set('foto', MainData.fotos[0].foto);
            dataForm.set('disfraz', data.id);
            fetch(`${host}${fotos}`, {
                method: "POST",
                body: dataForm
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
        }
        MainData.tallas && MainData.tallas.map(t => {
            fetch(`${host}${disfrazTalla}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    disfraz: data.id,
                    talla: t.talla,
                    cantidad: t.cantidad,
                    minStock: t.minStock,
                    maxStock: t.maxStock,
                    precio: t.precio,
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
        })
    })
    .catch(e => console.log(e))
}

async function postProveedor(data) {
    fetch(`${host}${proveedores}`,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => alert(`Proveedor: ${data.Nombre} Agregado!`))
    .catch(e => console.log(e))
}

async function postCarro(cantidad, id) {
    fetch(`${host}${carro}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cantidad: cantidad, disfraz: id}),
    })
}


export {postDisfraz, postProveedor, postCarro}