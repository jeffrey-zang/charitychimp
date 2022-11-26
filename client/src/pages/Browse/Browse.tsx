import React from "react";
import {AppContext, Charity} from "../../AppContext"
import {BsSearch, BsX} from "react-icons/bs"
import './Browse.scss'

export default function Browse() {
    const context = React.useContext(AppContext)
    const charities = context.charities 
    const [searchedCharities, setSearchedCharities] = React.useState<Charity[] | null>(charities)
    const [searchString, setSearchString] = React.useState<string>("")

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        let searched = search(searchString)
        setSearchedCharities(searchString ? (searched?.length ? searched : null) : charities)
        console.log({searchString, searchedCharities, charities})
    }

    const search: (search: string) => Charity[] = (search: string) => {
        let found: Charity[] = []
        for (let charity of charities) {
            if (charity.name.includes(search) || charity.tagline.includes(search)) {
                found.push(charity)
                continue
            }
            for (let tag of charity.tags) {
                if (search === tag) {
                    found.push(charity)
                    break
                }
            }
        }
        return found
    }

    return (
        <div id = 'browse'>
            <h1>Some cool charities</h1>
            <form id='searchbar' onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder='Search' onChange={(e) => setSearchString(e.target.value)} value={searchString}></input>
                <button className="clearButton" onClick={() => {setSearchString("")}}><BsX/></button>
                <button type='submit'><BsSearch /></button>
            </form>
            {searchedCharities ? searchedCharities.reverse().map(
                (value, index) => {
                    console.log(searchedCharities)
                    return (
                        <button className='post'>
                            <h2>{value.name}</h2>
                            <p>{value.tagline}</p>
                            <p>Verified nonprofit: {value.verified ? "yes" : "no"}</p>
                            <a href={value.website} style={{display: value.website ? "block" : "none"}}>{value.website ? "Website" : ""}</a>
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
            ) : <p>We couldn't find any results for your search!</p>}
        </div>
    )
}