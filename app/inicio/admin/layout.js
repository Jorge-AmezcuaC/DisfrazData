import NavSect from '../../components/NavSection/NavSect'
import './admin.css'

export default function InicioLayout({ children }) {
  return(
      <section style={{display: 'flex'}}>
        <NavSect/>
        <div className='admin-layout'>
          {children}
        </div>
      </section>
    )
}