"use client"
import { useState } from "react"
import Image from "next/image"
import './modal.css'
import {FaTimes} from 'react-icons/fa'

const Modal = (props) => {
    const data = props.data
    const tallas = ['XL', 'X', 'M', 'S', 'XS']
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return(
        <>
            <button className="card-button" onClick={open}>Detalles</button>
            {
                isOpen &&
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal-left">
                            <div className="modal-imagen">
                                <Image src={data.fotos[0].foto} fill style={{objectFit: 'contain'}} alt={`Disfraz de ${data.Nombre}`} sizes='any'/>
                            </div>
                            <button className="modal-button">Contactar Proveedor</button>
                            <button className="modal-button">Modificar</button>
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
                                {/* {tallas.map(item => {
                                    return(
                                        <div></div>
                                    )
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal