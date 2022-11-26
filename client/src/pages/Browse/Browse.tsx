import React from "react";
import {AppContext} from "../../AppContext"
import {BsSearch} from "react-icons/bs"
import './Browse.scss'

export default function Browse() {
    const context = React.useContext(AppContext)
    const charities = context.charities

    console.log('charities:', charities)
    return (
        <div id = 'browse'>
            <form id='searchbar'>
                <input type="text" name="search" placeholder='Search' required></input>
                <button><BsSearch /></button>
            </form>
            <button id = 'posts'>
                <h1>post title</h1>
                <h2>tagline</h2>
                <div className="progress">
                    <div style={{width:"25%"}}></div>
                </div>
                <div className="progress-labels">
                    <span>25%</span>
                    <span style={{color:'#000'}}>$100 000</span>
                </div>
            </button>
        </div>
    )
}