import Filters from '@/app/components/filters/filters'
import Content from '@/app/components/content/content'
import { SearchDisfraz } from '@/app/request/get'
import '../inicio.css'

export default async function Search(context) {
    const data = await SearchDisfraz(context.params.search)
    console.log(context)

    return (
    <div className='inicio-container'>
        <Filters/>
        <Content data={data.results}/>
    </div>
    )
}
  