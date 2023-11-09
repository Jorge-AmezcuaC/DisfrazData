"use client"
import { useEffect, useState } from "react"
import { UpdateOrCreateDisfraz } from "@/app/request/update"

export default function Form(props){
    const tallas = ['XL', 'X', 'M', 'S', 'XS']
    const [proveedor, setProveedor] = useState(props.data)
    const [values, setValues] = useState({
      tallas: []
    })

    const getIdTalla = talla => {
        return props.talla.results[props.talla.results.findIndex(t => t.talla == talla)].id
    }
    const getIndex = id => {
        return values.tallas.findIndex(t => t.talla == id)
    }
    const changeVar = (obj, atr, val) => {
        switch(atr){
            case 'max':
                obj.maxStock = val
                break
            case 'min':
                obj.minStock = val
                break
            case 'stock':
                obj.cantidad = val
                break
            case 'precio':
                obj.precio = val
                break
        }
        return obj
    }

    const createOrUpdateTalla = event => {
        const value = Number(event.target.value), name = event.target.name, about = event.target.alt
        let tempTallas = values.tallas
        let tempDatos = {}
        if(tempTallas.some(t => t.talla == getIdTalla(name))){
            tempTallas[getIndex(getIdTalla(name))] = changeVar(tempTallas[getIndex(getIdTalla(name))], about, value)
            setValues({...values, tallas: tempTallas})
        }else {
            tempDatos = changeVar(tempDatos, about, value)
            tempDatos.talla = getIdTalla(name)
            tempTallas.push(tempDatos)
            setValues({...values, tallas: tempTallas})
        }
    }

    return(
        <div className="formulario-container">
        <h3 className="formulario-title">Modificar Producto</h3>
        <div className="formulario-section">
          <div className="formulario-left">
            <label className="formulario-label">Nombre</label>
            <input className="formulario-input" type="text" defaultValue={props.disfrazToUpdate.Nombre} onChange={event => setValues({...values, Nombre: event.target.value})}/>
            <label className="formulario-label">Proveedor</label>
            <select className='formulario-input' onChange={event => setValues({...values, proveedor: event.target.value})} defaultValue={proveedor.results[props.disfrazToUpdate.proveedor - 1]}>
              {proveedor && proveedor.results.map(p => {
                return(
                  <option value={p.id} key={p.id}>{p.Nombre}</option>
                )
              })}
            </select>
            <label className="formulario-label">Descripcion</label>
            <textarea className="formulario-textArea" defaultValue={props.disfrazToUpdate.Descripcion} onChange={event => setValues({...values, Descripcion: event.target.value})}></textarea>
            <label className="formulario-label">Imagen</label>
            <input className="formulario-inputImg" type="file" accept="image/*" onChange={event => setValues({...values, fotos: [{foto:event.target.files?.[0]}]})}/>
          </div>
          <div className="formulario-rigth">
            <div className="formulario-groupLabels">
              <label className="formulario-label">Talla</label>
              <label className="formulario-label">Max</label>
              <label className="formulario-label">Min</label>
              <label className="formulario-label">Stock</label>
              <label className="formulario-label">Precio</label>
            </div>
            <div className="formulario-groupOptions">
              {tallas.map(t => {
                const pos = props.disfrazToUpdate.tallas.findIndex(t2 => t2.talla.talla === t)
                const exist = props.disfrazToUpdate.tallas[pos]
                return(
                  <div className="formulario-group" key={t}>
                    <label className="formulario-groupLabel">
                      <p>{t}</p>
                      <p>=</p>
                    </label>
                    <input defaultValue={exist && exist.maxStock} name={t} alt="max" className="formulario-groupInput" type="number" onChange={createOrUpdateTalla}/>
                    <input defaultValue={exist && exist.minStock} name={t} alt="min" className="formulario-groupInput" type="number" onChange={createOrUpdateTalla}/>
                    <input defaultValue={exist && exist.cantidad} name={t} alt="stock" className="formulario-groupInput" type="number" onChange={createOrUpdateTalla}/>
                    <input defaultValue={exist && exist.precio} name={t} alt="precio" className="formulario-groupInput" type="number" onChange={createOrUpdateTalla}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <button className="formulario-button" onClick={() => UpdateOrCreateDisfraz(values, props.disfrazToUpdate)}>Agregar Producto</button>
      </div>
    )
}