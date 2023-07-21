import Link from "next/link"


export default function Home(){
  return(
    <div>
      <h1>Registrasion</h1>
      <form action="/api/register" method="post">
        <label>
          Email Address
        </label>
        <input type="email" name="email" placeholder="Masukkan email anda"></input>
        <label>
          Password
        </label>
        <input type="password" name="password" placeholder="Masukkan password anda"></input>
        <input type="submit" value="Registrasi"></input>
      </form>

      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>
          Email Address
        </label>
        <input type="email" name="email" placeholder="Masukkan email anda"></input>
        <label>
          Password
        </label>
        <input type="password" name="password" placeholder="Masukkan password anda"></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}