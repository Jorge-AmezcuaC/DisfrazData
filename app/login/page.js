import Link from "next/link"
import './login.css'

export default function Login() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <h3 className="login-left-title">Welcome Back!</h3>
          </div>
          <div className="login-rigth">
            <h3 className="login-rigth-title">Login</h3>
            <div className="login-input-group">
              <input type="text" placeholder="Username" className="login-input"/>
              <input type="password" placeholder="Password" className="login-input"/>
            </div>
            <div className="login-button-group">
              <Link href={'/inicio'} className="login-links"><button className="login-button">Login</button></Link>
              <Link href={'/logup'} className="login-tologup">Don't have an account? Sign Up!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  