import CardVenta from "@/app/components/ventaProducto/cardVenta"
import './carro.css'

export default function Carro() {
  return (
    <div className="venta-container">
      <div className="venta-header">
        <h3 className="venta-title">Venta</h3>
        <div>
          <button className="venta-gen">Generar Venta</button>
          <button className="venta-clean">Limpiar Venta</button>
        </div>
      </div>
      <div className="venta-content">
        <CardVenta />
      </div>
    </div>
  )
}
