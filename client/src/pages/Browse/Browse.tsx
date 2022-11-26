import React from "react";
import {AppContext, Charity} from "../../AppContext"
import {BsSearch} from "react-icons/bs"
import './Browse.scss'

export default function Browse() {
    const context = React.useContext(AppContext)
    const charities = context.charities 

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
    }

    const search: (search: string) => Charity[] = (search: string) => {
        for (let charity of charities) {
            
        }
        return charities
    }

    console.log('charities:', charities)
    return (
        <div id = 'browse'>
            <h1>Some cool charities</h1>
            <form id='searchbar' onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder='Search' required></input>
                <button type='submit'><BsSearch /></button>
            </form>
            {charities.map(
                (value, index) => {
                    return (
                        <button className = 'post'>
                            <h2>{value.name}</h2>
                            <p>{value.tagline}</p>
                            <div className="progress">
                                <div style={{width:`${(value.current/value.goal)*100}%`}}></div>
                            </div>
                            <div className="progress-labels">
                                <span>{(Math.round((value.current/value.goal)*100))}%</span>
                                <span style={{color:'#000'}}>${value.goal}</span>
                            </div>
                        </button>      
                    )
                }
            )}
        </div>
    )
}