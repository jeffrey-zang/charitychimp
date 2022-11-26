import React from 'react'
import './Home.scss'
import homeImg from './Home.png'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <main>
      <img id='homeimg' src= {homeImg} />
      <div id='wrapper'>
        <img id='logo' src= {logo} />
        <div id = 'title'>CharityChimp</div>
        <div id = 'description'>
          Helping you help others through charities
        </div>
        <div id='buttons'>
          <button id = 'getStarted' onClick = {
            () => {navigate('/post')}
          }>Get Started</button>
          <button id = 'viewCharities' onClick = {
            () => {navigate('/browse')}
          }>View Charities</button>
        </div>
      </div>
  	</main>
  )
}

// Co-authored-by: Li Feng Yin <lifeng-yin@users.noreply.github.com>
// Co-authored-by: gayeunbella <gayeunbella@users.noreply.github.com>
// Co-authored-by: Daniel Zhang <d.zhang200788@gmail.com>

export default Home