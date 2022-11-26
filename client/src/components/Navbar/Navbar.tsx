import { Link } from 'react-router-dom'
import './Navbar.scss'

import React from 'react'
import { AppContext } from "../../AppContext"

import { BsGithub } from 'react-icons/bs'

const Navbar = () => {

  const pages = ['Browse', 'Post']
  
  const context = React.useContext(AppContext)
  let amiloggedin = 'Log In'

  if (context.user?.username) {
    amiloggedin = context.user?.username
  } 

  return (
    <div id='nav'>
      <div>
        <Link key='Home' to='/'>Home</Link>
        {pages.map((value) => {
          return (
            <Link key={value} to={`/${value.toLowerCase()}`}>{value}</Link>
            )
          })}
      </div>
      <img className={context.user?.pfp ? "navpfp" : "hide"} src={context.user?.pfp} alt='pfp'></img>
      <Link key='Login' to='/login' id='loginbutton'>
        {amiloggedin}
      </Link>
      {/* <a href='https://github.com/jeffrey-zang/give-back-hacks' target='_blank' rel='noreferrer'><BsGithub/></a> */}

    </div>
  )
}

export default Navbar