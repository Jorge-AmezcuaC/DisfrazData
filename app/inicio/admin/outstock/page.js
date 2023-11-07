import { getNotification } from "@/app/request/get"
import OutCard from './OutCard'
import './outstock.css'

export default async function OutSotock() {
  const notificacion = await getNotification()
  console.log(notificacion);
    return(
      <div className="outstock-container">
        <h3 className="outstock-title">OutStock</h3>
        {notificacion.results.map(item => {
          return <OutCard data={item}/>
        })}
      </div>
    )
  }
  