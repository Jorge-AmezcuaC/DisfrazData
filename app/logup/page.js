import Link from "next/link"
import './logup.css'

export default function LogUp() {
    return (
      <div className="logup-page">
        <div className="logup-container">
          <div className="logup-left">
            <h3 className="logup-left-title">Welcome to DisfrazData</h3>
          </div>
          <div className="logup-rigth">
            <h3 className="logup-rigth-title">Create your account</h3>
            <div className="logup-input-group">
              <input type="text" placeholder="Email" className="logup-input"/>
              <input type="password" placeholder="Password" className="logup-input"/>
              <div className="logup-options">
                <p className="logup-text">Got an account?</p>
                <Link href={'login'} className="logup-tologin">Log in here {'->'}</Link>
              </div>
            </div>
              <Link href={'login'} className="logup-link"><button className="logup-button">SignUp</button></Link>
          </div>
        </div>
      </div>
    )
  }
  