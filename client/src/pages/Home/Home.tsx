import React from 'react'
import './Home.scss'
import homeImg from './Home.png'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import Deso from '../Login/deso.webp'

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <img id='homeimg' src= {homeImg} />
      <div id='wrapper'>
        <img id='logo' src= {logo} />
        <div id = 'title'>CharityChimp</div>
        <h3 className = 'description'>
          Helping you help others through charities
        </h3>
        <div id='buttons'>
          <button className='primary-button' onClick = {
            () => {navigate('/post')}
          }>Get Started</button>
          <button className='secondary-button' onClick = {
            () => {navigate('/browse')}
          }>View Charities</button>
        </div>
        <h3 className = 'description'>Powered by <img id = 'homedeso' src={Deso}></img></h3>
      </div>
  	</main>
  )
}

// Co-authored-by: Li Feng Yin <lifeng-yin@users.noreply.github.com>
// Co-authored-by: gayeunbella <gayeunbella@users.noreply.github.com>
// Co-authored-by: Daniel Zhang <d.zhang200788@gmail.com>

export default Home