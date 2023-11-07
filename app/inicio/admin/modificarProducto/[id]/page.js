import '../../formulario.css'
import FormUpdate from './FormUpdate'
import { getTalla, getProveedor, getDisfrazById } from '@/app/request/get'

export default async function Page({params}) {
    const geT = await getTalla()
    const data = await getProveedor()
    const disfrazToUpdate = await getDisfrazById(params.id)
    return <FormUpdate data={data} talla={geT} disfrazToUpdate={disfrazToUpdate}/>
  }
  