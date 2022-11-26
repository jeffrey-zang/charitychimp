import { Link } from 'react-router-dom'
import './Navbar.scss'

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
    </div>
  )
}

export default Navbar