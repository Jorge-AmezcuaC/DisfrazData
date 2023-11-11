"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const FormIn = () => {
    const router = useRouter()
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [fail, setFail] = useState(false)
    const [msj, setMsj] = useState('')

    const login = () => {
        setFail(false)
        if(loginData.username && loginData.password){
            fetch('http://localhost:8000/login/', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
            .then(response => response.json())
            .then(data => {
                if(data.token){
                    router.push(`/inicio`)
                    // router.push(`/login/${data.user.username}?token=${data.token}`)
                }else{
                    setFail(true)
                    setMsj(data.mensaje)
                }
            })
        }else{
            setFail(true)
            setMsj('Faltan Campos por llenar')
        }
    }

    return(
        <div className="login-rigth">
            <h3 className="login-rigth-title">Login</h3>
            {fail &&
                <p className="errors">{msj}</p>
            }
            <div className="login-input-group">
              <input type="text" placeholder="Username" className="login-input" onChange={e => setLoginData({...loginData, username: e.target.value})}/>
              <input type="password" placeholder="Password" className="login-input" onChange={e => setLoginData({...loginData, password: e.target.value})}/>
            </div>
            <div className="login-button-group">
              <button className="login-button" onClick={login}>Login</button>
              <Link href={'/logup'} className="login-tologup">Don't have an account? Sign Up!</Link>
            </div>
        </div>
    )
}

export default FormIn