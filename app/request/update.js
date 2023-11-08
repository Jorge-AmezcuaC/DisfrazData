const host = 'http://127.0.0.1:8000/'
const disfraces = 'Disfraces/'
const fotos = 'fotos/'
const disfrazTalla = 'PostTallas/'
const updTalla = 'DisfrazTalla/'

const UpdateOrCreateDisfraz = (newData, oldData)  => {
    console.log(oldData);
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
        .then(data => console.log(data))
    }
    if(newData.tallas){

    }
    if(newData.fotos){
        const dataForm = new FormData();
        dataForm.set('foto', newData.fotos[0].foto);
        fetch(`${host}${fotos}${oldData.fotos[0].id}/`, {
            method: "PATCH",
            body: dataForm
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

export {UpdateOrCreateDisfraz}