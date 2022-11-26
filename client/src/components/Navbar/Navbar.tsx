import { Link } from 'react-router-dom'
import './Navbar.scss'

import { BsGithub } from 'react-icons/bs'

const Navbar = () => {

  const pages = ['Browse', 'Post', 'Search']

  return (
    <div id='nav'>
      <Link key='Home' to='/'>Home</Link>
      {pages.map((value) => {
        return (
          <Link key={value} to={`/${value.toLowerCase()}`}>{value}</Link>
        )
      })}
      <a href='https://github.com/jeffrey-zang/give-back-hacks' target='_blank' rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default Navbar