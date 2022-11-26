import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const pages = ['Browse', 'Search', 'Post']

    return (
        <div id='nav'>
            <Link key={'Home'} to={'/'}>Home</Link>
            {pages.map((value, index) => {
                return (
                    <Link key={value} to={`/${value.toLowerCase()}`}>{value}</Link>
                )
            })}
        </div>
    )
}

export default Navbar;