import FormIn from './FormIn'
import './login.css'

export default function Login() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <h3 className="login-left-title">Welcome Back!</h3>
          </div>
          <FormIn/>
        </div>
      </div>
    )
  }
  