import { cookies } from 'next/headers'
import styles from './page.module.css'
import { redirect } from 'next/navigation'

export default function Home() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  return (
    <main className={styles.main}>
      {
        token ?
        redirect('inicio')
        :
        redirect('login')
      }
      <p>Redirect</p>
    </main>
  )
}
