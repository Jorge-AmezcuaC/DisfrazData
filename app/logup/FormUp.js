"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const FormUp = () => {
    const [LogUpData, setLogUpData] = useState({
        email: '',
        username: '',
        password: '',
    })
    const [status, setStatus] = useState()
    const [errors, setErrors] = useState()
    const [fail, setFail] = useState(false)
    const router = useRouter()

    const Logup = () => {
        setErrors('')
        if(LogUpData.email && LogUpData.username && LogUpData.password){
            fetch("http://localhost:8000/users/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(LogUpData)
            })
            .then(response => response.json())
            .then(data => {
                if(data.id){
                    setFail(false)
                    setStatus("Registro Compleatado!")
                }else{
                    setFail(true)
                    setStatus(`Ya existe un usuario con ese username`)
                }
            })
            .catch(e => console.log("este es el error", e))
        }else{
            setErrors("Faltan Campos por llenar")
        }
    }

    return(
        <div className="logup-rigth">
            <h3 className="logup-rigth-title">Create your account</h3>
            {errors && 
                <div className="errors-div">
                    <p className="errors-text">{errors}</p>
                </div>
            }
            {status && 
                <div className={fail ? "errors-div" : "success-div"}>
                    <p className={fail ? "errors-text" : "success-text"}>{status}</p>
                </div>
            }
            <div className="logup-input-group">
              <input type="text" placeholder="Email" className="logup-input" onChange={e => setLogUpData({...LogUpData, email: e.target.value})}/>
              <input type="text" placeholder="Username" className="logup-input" onChange={e => setLogUpData({...LogUpData, username: e.target.value})}/>
              <input type="password" placeholder="Password" className="logup-input" onChange={e => setLogUpData({...LogUpData, password: e.target.value})}/>
              <div className="logup-options">
                <p className="logup-text">Got an account?</p>
                <Link href={'login'} className="logup-tologin">Log in here {'->'}</Link>
              </div>
            </div>
            <button className="logup-button" onClick={Logup}>SignUp</button>
          </div>
    )
}

export default FormUp