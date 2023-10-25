import Nav from '../components/navbar/Nav'
export default function InicioLayout({ children }) {
  return(
      <section>
        <Nav/>
        {children}
      </section>
    )
}