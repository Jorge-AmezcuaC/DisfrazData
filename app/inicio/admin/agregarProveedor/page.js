"use client"
import './addProv.css'
import { useState } from 'react'
import { postProveedor } from '@/app/request/post'

export default function agregarProveedor() {
    const [values, setValues] = useState({
        Nombre: '',
        Email: '',
        Telefono: '',
    })
    return(
        <div className="addProv-container">
            <div className="addProv-card">
                <h3 className="addProv-title">Agregar Proveedor</h3>
                <input onChange={e => setValues({...values, Nombre: e.target.value})} className="addProv-input" type="text" placeholder="Nombre del Proveedor"/>
                <input onChange={e => setValues({...values, Email: e.target.value})} className="addProv-input" type="text" placeholder="Correo del Proveedor"/>
                <input onChange={e => setValues({...values, Telefono: e.target.value})} className="addProv-input" type="tel" placeholder="Telefono del Proveedor"/>
                <button className="addProv-button" onClick={() => postProveedor(values)}>Agregar Proveedor</button>
            </div>
        </div>
    )
}