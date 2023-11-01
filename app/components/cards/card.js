import Image from "next/image"
import './card.css'
import Modal from "../details/Modal"

export default function Card(props) {
    const data = props.data
    const tallas = ['XL', 'X', 'M', 'S', 'XS']

    return(
        <div className="card">
            <div className="card-image">
                <Image src={data.fotos[0].foto} fill style={{objectFit: 'contain'}} alt={`Disfraz de ${data.Nombre}`} sizes='any'/>
            </div>
            <div className="card-info">
                <h3 className="card-name">{data.Nombre}</h3>
                <p className="card-desc">{data.Descripcion}</p>
            </div>
            <div className="card-options">
                <p className="card-tallaText">Tallas</p>
                <div className="card-tallas">
                    {tallas.map(item => {
                        return(
                            <div className="card-group" key={item}>
                                <input type="checkbox" readOnly checked={JSON.stringify(data.tallas).includes(item)} className="card-checkbox"/>
                                <label className="card-label">{item}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal data={data}/>
        </div>
    )
}