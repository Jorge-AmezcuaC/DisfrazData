import Image from "next/image"
import Link from "next/link"

const OutCard = (props) => {
    const data = props.data.producto
    const tallas = ['XL', 'X', 'M', 'S', 'XS']
    return(
            <div className="outcard-box">
                <div className="outcard-left">
                    <div className="outcard-imagen">
                        {data.fotos[0] && <Image src={data.fotos[0].foto} fill style={{objectFit: 'contain'}} alt={`Disfraz de ${data.Nombre}`} sizes='any'/>}
                    </div>
                    <Link href={'/inicio/admin/contactarProveedor'} className="outcard-links"><button className="outcard-button">Contactar Proveedor</button></Link>
                </div>
                <div className="outcard-rigth">
                    <h3 className="outcard-title">{data.Nombre}</h3>
                    <p className="outcard-desc">{data.Descripcion}</p>
                    <div className="outcard-labels">
                        <p>Talla</p>
                        <p>Max</p>
                        <p>Min</p>
                        <p>Stock</p>
                        <p>Precio</p>
                    </div>
                    <div className="outcard-options">
                        {tallas.map(item => {
                            const pos = data.tallas.findIndex(t => t.talla.talla === item)
                            const exist = data.tallas[pos]
                            return(
                                <div className="outcard-data" key={item}>
                                    <p className={exist ? (exist.cantidad < exist.minStock ? "outcard-outstock" : "outcard-dataDetails") : "outcard-noexist"}>{item}</p>
                                    <p className={exist ? (exist.cantidad < exist.minStock ? "outcard-outstock" : "outcard-dataDetails") : "outcard-noexist"}>{exist ? data.tallas[pos].maxStock : 0}</p>
                                    <p className={exist ? (exist.cantidad < exist.minStock ? "outcard-outstock" : "outcard-dataDetails") : "outcard-noexist"}>{exist ? data.tallas[pos].minStock : 0}</p>
                                    <p className={exist ? (exist.cantidad < exist.minStock ? "outcard-outstock" : "outcard-dataDetails") : "outcard-noexist"}>{exist ? data.tallas[pos].cantidad : 0}</p>
                                    <p className={exist ? (exist.cantidad < exist.minStock ? "outcard-outstock" : "outcard-dataDetails") : "outcard-noexist"}>${exist ? data.tallas[pos].precio : 0}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}

export default OutCard