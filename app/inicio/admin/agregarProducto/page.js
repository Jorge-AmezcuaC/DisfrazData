import '../formulario.css'
import Form from './Form'
import { getProveedor, getTalla } from '../../../request/get'

export default async function AgregarProducto() {
  const geT = await getTalla()
  const data = await getProveedor()
    return (
      <Form data={data} talla={geT}/>
    )
  }
  