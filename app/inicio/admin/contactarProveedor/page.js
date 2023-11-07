"use client"

import './contactar.css'
import { useParams } from 'next/navigation'

export default function Contactar() {
  const params = useParams()
  const defaultMessage = "Hola buenas ______\nLa tienda ________ desea solicitar la cotizacion de los siguientes productos\n1-\n2-\n3-"
    return (
      <div className="cont-container">
        <h3 className="cont-title">Contactar</h3>
        <div className="cont-mail">
          <div className="cont-to">
            <label className="cont-label">Para: </label>
            <input type="text" className="cont-toIinput"/>
          </div>
          <div className="cont-body">
            <label className="cont-label">Correo</label>
            <textarea className="cont-bodyInput" defaultValue={defaultMessage}/>
          </div>
          <button className="cont-button" onClick={() => console.log(params)}>Enviar</button>
        </div>
      </div>
    )
  }
  