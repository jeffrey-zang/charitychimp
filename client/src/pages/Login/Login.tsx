import React from 'react'
import { AppContext } from "../../AppContext"
import './Login.scss'
import Desologo from './deso.webp'

const Login = () => {

  const context = React.useContext(AppContext)

  const login = async (pkey:string) => {
    context.setUser(await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pkey: pkey })
    }).then((res) => res.json().then((r) => {
      console.log(r.Profile)
      return r.Profile
    })))
  }

  return (
    <div id='login'>
      <form onSubmit={(e) => {e.preventDefault(); login('BC1YLhEu3fxmib76x54grbhLRtR2Eubp9G16B6p5vHe5h1e2VdBrcsQ')}}>
        <h2>
          Log in using your Deso public id
          <img src={Desologo} alt='desologo' id='desologo'></img>
        </h2><br/>
        <p id='desc'>Example: BC1YLgk64us61PUyJ7iTEkV4y2GqpHSi8ejWJRnZwsX6XRTZSfUKsop</p>
        <input className='form' type="text" id="id" name="id" placeholder='your id'required></input><br/>
        <input id='submitbutton' type="submit" value="Submit"/>
      </form>
      <p>
        {JSON.stringify(context.user)}
      </p>
    </div>
  )
}

export default Login