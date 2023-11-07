import './addProv.css'

export default function agregarProveedor() {
    return(
        <div className="addProv-container">
            <div className="addProv-card">
                <h3 className="addProv-title">Agregar Proveedor</h3>
                <input className="addProv-input" type="text" placeholder="Nombre del Proveedor"/>
                <input className="addProv-input" type="text" placeholder="Correo del Proveedor"/>
                <input className="addProv-input" type="tel" placeholder="Telefono del Proveedor"/>
                <button className="addProv-button">Agregar Proveedor</button>
            </div>
        </div>
    )
}