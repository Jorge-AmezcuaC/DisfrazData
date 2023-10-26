import NavSect from '../../components/NavSection/NavSect'

export default function InicioLayout({ children }) {
  return(
      <section style={{display: 'flex'}}>
        <NavSect/>
        {children}
      </section>
    )
}