const host = 'http://127.0.0.1:8000/'
const disfraces = 'Disfraces/'
const fotos = 'fotos/'
const disfrazTalla = 'PostTallas/'
const updTalla = 'DisfrazTalla/'

const UpdateOrCreateDisfraz = (newData, oldData)  => {
    if(newData.Nombre || newData.Descripcion || newData.proveedor){
        const newDisfraz = {}
        newData.Nombre && (newDisfraz.Nombre = newData.Nombre)
        newData.Descripcion && (newDisfraz.Descripcion = newData.Descripcion)
        newData.proveedor && (newDisfraz.proveedor = Number(newData.proveedor))
        fetch(`${host}${disfraces}${oldData.id}/`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDisfraz)
        })
        .then(response => response.json())
        .then(data => alert(`Disfraz actualizado de: ${oldData.Nombre}`))
    }
    if(newData.tallas.length > 0){
        newData.tallas.map(newT => {
            if(oldData.tallas.some(t => t.talla.id == newT.talla)){
                fetch(`${host}${updTalla}${oldData.tallas.filter(t => t.talla.id == newT.talla)[0].id}/`,{
                    method: "PATCH",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newT)
                })
            }else{
                const prePostData = {
                    disfraz: oldData.id,
                    cantidad: (newT.cantidad ? newT.cantidad : 0),
                    minStock: (newT.minStock ? newT.minStock : 0),
                    maxStock: (newT.maxStock ? newT.maxStock : 0),
                    precio: (newT.precio ? newT.precio : 0),
                    talla: (newT.talla ? newT.talla : 0),
                }
                fetch(`${host}${disfrazTalla}`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(prePostData)
                })
            }
        })
    }
    if(newData.fotos){
        const dataForm = new FormData();
        dataForm.set('foto', newData.fotos[0].foto);
        if(oldData.fotos[0]){
            fetch(`${host}${fotos}${oldData.fotos[0].id}/`, {
                method: "PATCH",
                body: dataForm
            })
            .then(response => response.json())
            .then(data => alert(`Foto actualizada de: ${oldData.Nombre}`))
        }else{
            dataForm.set('disfraz', oldData.id)
            fetch(`${host}${fotos}`, {
                method: "POST",
                body: dataForm
            })
            .then(response => response.json())
            .then(data => alert(`Foto actualizada de: ${oldData.Nombre}`))
        }
    }
    alert("Datos Actualizados!")
}

export {UpdateOrCreateDisfraz}