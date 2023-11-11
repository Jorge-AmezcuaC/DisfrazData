import Image from "next/image"
import './card.css'
import { getDisfrazCarro } from "@/app/request/get"
import BtnDelete from './BtnDelete'

export default async function CardVenta(props) {
    const cantidad = props.data.cantidad
    const {data, data2} = await getDisfrazCarro(props.data.disfraz)
    
    return(
        <div className="vt-card">
            <div className="vt-left">
                {data2.fotos[0] && <Image src={data2.fotos[0].foto} fill style={{objectFit: 'contain'}} alt={`Disfraz de ${data2.Nombre}`} sizes='any'/>}
            </div>
            <div className="vt-rigth">
                <div className="vt-info">
                    <h3 className="vt-title">{data2.Nombre}</h3>
                    <p className="ct-desc">{data2.Descripcion}</p>
                    <div className="vt-groupLabel">
                        <label className="vt-label">Talla</label>
                        <label className="vt-label">Cantidad</label>
                        <label className="vt-label">SubTotal</label>
                    </div>
                    <div className="vt-groupInfo">
                        <p className="vt-text">{data.talla.talla}</p>
                        <p className="vt-text">{cantidad}</p>
                        <p className="vt-text">${data.precio * cantidad}</p>
                    </div>
                </div>
            </div>
                <BtnDelete id={props.data.id}/>
        </div>
    )
}