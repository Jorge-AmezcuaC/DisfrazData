"use client"

import { redirect } from 'next/navigation'
import Cookies from 'js-cookie';

export default async function Page(context) {
  console.log("este es el context",context);

  // Manejo de cookies
  Cookies.set('token', context.searchParams.token);
  Cookies.set('username', context.params.username);

  // Redirección después de guardar las cookies
  redirect('/inicio');
}
