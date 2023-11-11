import FormUp from './FormUp'
import './logup.css'

export default function LogUp() {
    return (
      <div className="logup-page">
        <div className="logup-container">
          <div className="logup-left">
            <h3 className="logup-left-title">Welcome to DisfrazData</h3>
          </div>
          <FormUp/>
        </div>
      </div>
    )
  }
  