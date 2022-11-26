import React from 'react'
import { AppContext } from "../../AppContext"
import './Login.scss'
import Desologo from './deso.webp'

import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate = useNavigate()

  const [id, setId] = React.useState<string>("")

  const context = React.useContext(AppContext)

  const login = async (pkey: string) => {
    let res = await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pkey: pkey })
    })
    if (res.status === 500) {
      alert("YOU BAFFOUN!")
    } else if (res.status === 200) {

      let r = await res.json()
      let p = r.Profile
      context.setUser(
        {
          username: p.Username,
          description: p.Description,
          balance: p.DESOBalanceNanos,
          pfp: p.ExtraData.FeaturedImageURL,
        }
      )

      navigate('/success');
    }
  }


  return (
    <div id='login'>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          login(id);
        }}
      >
        <h2>
          Log in using your Deso public id
          <a href='https://diamondapp.com/'>
            <img src={Desologo} alt='desologo' id='desologo'></img>
          </a>
        </h2><br />
        <p id='desc'>Example: BC1YLgk64us61PUyJ7iTEkV4y2GqpHSi8ejWJRnZwsX6XRTZSfUKsop</p>
        <input className='form' type="text" id="id" name="id" placeholder='your id' value={id} onChange={(e) => setId(e.target.value)} required></input><br />
        <button id='submitbutton' type="submit" value="Submit">Log In</button>
      </form>
      <p>
        {context.user ? "You\'re already logged in!" : ""}
      </p>
    </div>
  )
}

export default Login