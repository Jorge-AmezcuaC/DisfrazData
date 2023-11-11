import CardVenta from "@/app/components/ventaProducto/cardVenta"
import './carro.css'
import { getCarro } from "@/app/request/get"
import GroupBtn from "@/app/components/ventaProducto/GroupBtn"

export default async function Carro() {
  const data = await getCarro()
  return (
    <div className="venta-container">
      <div className="venta-header">
        <h3 className="venta-title">Venta</h3>
        <GroupBtn data={data.results}/>
      </div>
      <div className="venta-content">
        {data && data.results.map(item => {
          return(
            <CardVenta data={item}/>
          )
        })}
      </div>
    </div>
  )
}
