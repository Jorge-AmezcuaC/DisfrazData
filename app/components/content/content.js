import Card from "../cards/card"
import './conten.css'

export default function Content(props) {
    const data = props.data

    return(
        <div className="content-container">
           {data.map(item => {
                return(
                    <Card data={item}/>
                )
            })} 
        </div>
    )
}