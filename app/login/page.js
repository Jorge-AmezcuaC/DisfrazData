import Link from "next/link"
export default function Login() {
    return (
      <div>
        <button><Link href={'/inicio'}>Login</Link></button>
        <button><Link href={'/logup'}>Registrarse</Link></button>
      </div>
    )
  }
  