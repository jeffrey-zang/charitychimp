import React from 'react'
import { AppContext } from "../../AppContext"
import './Login.scss'

const Login = () => {

  const context = React.useContext(AppContext)

  const login = async () => {
    context.setUser(await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pkey: "BC1YLhp9Zf6Yykr7V14zxqeoLS1AbsvExpkgMdVVuT3TDniEhD8htJ1" })
    }).then((res) => res.json()))
  }

  return (
    <div id='login'>
      <form onSubmit={login}>
        <h1>Log In using your Deso account public id</h1>
        <input></input>
        <button>Login</button>
        {context}
      </form>
    </div>
  )
}

export default Login