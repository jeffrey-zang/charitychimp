import React from 'react'
import './Login.scss'
import { AppContext } from "../../AppContext"
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const Success = () => {

  const context = React.useContext(AppContext)

  if (context.user) {
    return (
      <div id='success'>
        <h2><FaCheck/> Successfully logged into your Deso account</h2>
        <p>Success! You're now logged in and can create posts about your SADFASDFKASDJF;KADJS;KJ;LKDJSAfavourite charities.</p>
        <p>
          Username: <code>{context.user?.username}</code><br/>
          Description: <code>{context.user?.description}</code><br/>
          Balance (DESO Nanos): <code>{context.user?.balance}</code><br/>
        </p>
        <Link to='/post' key='post'>Start posting</Link><br/>
        <Link to='/browse' key='browse'>Browse charities</Link>
      </div>
    )  
  } else {
    return (
      <div id='success'>
        <h2>Whoops</h2>
        <p>Whoops! You forgot to log in. Do so <Link to='/login' key='login'>here</Link>.</p>
      </div>
    )
  }

}

export default Success