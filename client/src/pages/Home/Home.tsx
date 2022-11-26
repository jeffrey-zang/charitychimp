import React from 'react'
import './Home.scss'
import homeImg from './Home.png'
import logo from './logo.png'

const Home = () => {
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
          <button id = 'getStarted'>Get Started</button>
          <button id = 'viewCharities'>View Charities</button>
        </div>
      </div>
  	</main>
  )
}

export default Home