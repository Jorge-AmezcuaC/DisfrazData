import Filters from '../components/filters/filters'
import Content from '../components/content/content'
import { getDisfraces } from '../request/get'
import './inicio.css'

export default async function Inicio() {

  const data = await getDisfraces()

  return (
    <div className='inicio-container'>
      <Filters/>
      <Content data={data.results}/>
    </div>
  )
}
  