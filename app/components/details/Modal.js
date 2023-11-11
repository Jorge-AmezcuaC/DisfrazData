"use client"
import { useState } from "react"
import Image from "next/image"
import './modal.css'
import {FaTimes} from 'react-icons/fa'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { postCarro } from "@/app/request/post"

const Modal = (props) => {
    const data = props.data
    const tallas = ['XL', 'X', 'M', 'S', 'XS']
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const [tallaSelected, setTallaSelected] = useState(data.tallas[0])
    const [cantidad, setCantidad] = useState(1)
    const router = useRouter()
    
    const changeTalla = (event) => {
        setTallaSelected(JSON.parse(event.target.value))
        setCantidad(1)
    }
    const changeCount = () => {
        if(cantidad < tallaSelected.cantidad)
            setCantidad(cantidad+1)
    }
    const reduceCount = () => {
        if(cantidad > 1)
            setCantidad(cantidad-1)
    }

    const prepararCompra = () => {
        postCarro(cantidad, tallaSelected.id)
        router.push('inicio/carro')
    }

    useState(() => {
        setCantidad(1)
    }, [])

    return(
        <>
            <button className="card-button" onClick={open} key={data.id}>Detalles</button>
            {
                isOpen &&
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal-left">
                            <div className="modal-imagen">
                                {data.fotos[0] && <Image src={data.fotos[0].foto} fill style={{objectFit: 'contain'}} alt={`Disfraz de ${data.Nombre}`} sizes='any'/>}
                            </div>
                            <Link href={'/inicio/admin/contactarProveedor'} className="modal-links"><button className="modal-button">Contactar Proveedor</button></Link>
                            <Link href={`/inicio/admin/modificarProducto/${data.id}/`} className="modal-links"><button className="modal-button">Modificar</button></Link>
                        </div>
                        <div className="modal-rigth">
                            <button onClick={close} className="modal-close"><FaTimes size={20}/></button>
                            <h3 className="modal-title">{data.Nombre}</h3>
                            <p className="modal-desc">{data.Descripcion}</p>
                            <div className="modal-labels">
                                <p>Talla</p>
                                <p>Max</p>
                                <p>Min</p>
                                <p>Stock</p>
                                <p>Precio</p>
                            </div>
                            <div className="modal-options">
                                {tallas.map(item => {
                                    const pos = data.tallas.findIndex(t => t.talla.talla === item)
                                    const exist = data.tallas[pos]
                                    return(
                                        <div className="modal-data" key={item}>
                                            <p className={exist ? "modal-dataDetails" : "modal-noexist"}>{item}</p>
                                            <p className={exist ? "modal-dataDetails" : "modal-noexist"}>{exist ? data.tallas[pos].maxStock : 0}</p>
                                            <p className={exist ? "modal-dataDetails" : "modal-noexist"}>{exist ? data.tallas[pos].minStock : 0}</p>
                                            <p className={exist ? "modal-dataDetails" : "modal-noexist"}>{exist ? data.tallas[pos].cantidad : 0}</p>
                                            <p className={exist ? "modal-dataDetails" : "modal-noexist"}>${exist ? data.tallas[pos].precio : 0}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="modal-buy">
                                <label className="modal-buy-label">Talla</label>
                                <select className="modal-buy-input" defaultValue={data.tallas[0].talla.talla} onChange={changeTalla}>
                                    {data.tallas.map(t => {
                                        return(
                                            <option value={JSON.stringify(t)} key={t.talla.id}>{t.talla.talla}</option>
                                        )
                                    })}
                                </select>
                                <label className="modal-buy-label">Cantidad</label>
                                <button onClick={reduceCount} className="modal-buy-inpbutton">-</button>
                                <input className="modal-buy-input2" type="number" value={cantidad} readOnly/>
                                <button onClick={changeCount} className="modal-buy-inpbutton2">+</button>
                                <label className="modal-buy-label">Sub Total ${cantidad * tallaSelected.precio}</label>
                                <button className="modal-buy-button" onClick={prepararCompra}>Agregar A Venta</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal