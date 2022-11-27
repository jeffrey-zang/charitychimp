import './Footer.scss'
import Deso from '../../pages/Login/deso.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer'>
        <div>
            <h1>CharityChimp</h1>
            <p>Helping you help others through charities</p>
            <img src = {Deso}></img>
        </div>
        <div>
            <h2>
                Navigation
            </h2>
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse</Link>
            <Link to='/post'>Post</Link>
            <Link to='/login'>Login</Link>
        </div>
        <div>
            <h2>
                other info
            </h2>
            <a href='https://github.com/jeffrey-zang/charitychimp'>Source</a>
            <a href='https://devpost.com/software/charitychimp'>Devpost</a>
            <a href='https://mlh.io/seasons/2023/events'>MLH</a>
        </div>
    </div>
  )
}

export default Footer