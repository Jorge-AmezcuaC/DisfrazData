import NavSect from '../../components/NavSection/NavSect'
export default function InicioLayout({ children }) {
  return(
      <section>
        <NavSect/>
        {children}
      </section>
    )
}