import React from "react";
import {AppContext, Charity} from "../../AppContext"
import {BsSearch, BsX, BsCheckCircleFill} from "react-icons/bs"
import './Browse.scss'

export default function Browse() {
    const context = React.useContext(AppContext)
    let charities = context.charities
    charities.reverse()
    const [searchedCharities, setSearchedCharities] = React.useState<Charity[] | null>(charities)
    const [searchString, setSearchString] = React.useState<string>("")

    const handleSubmit = (e:React.SyntheticEvent | React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        let searched = search(searchString)
        setSearchedCharities(searchString ? (searched?.length ? searched : null) : charities)
        console.log("AAAAAFDFSDF")
    }

    const search: (search: string) => Charity[] = (search: string) => {
        let found: Charity[] = []
        search = search.toLowerCase();
        for (let charity of charities) {
            if (charity.name.toLowerCase().includes(search) || charity.tagline.toLowerCase().includes(search)) {
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
            <h1>Charities Needing Donations</h1>
            <form id='searchbar' onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder='Search' onChange={(e) => setSearchString(e.target.value)} value={searchString} onKeyDown={(e) => {
                    e.preventDefault()
                    if (e.key === "enter") handleSubmit(e)
                }}></input>
                <button className="clearButton" onClick={() => setSearchString("")}><BsX/></button>
                <button type='submit'><BsSearch /></button>
            </form>
            {searchedCharities ? searchedCharities.slice().reverse().map(
                (value, index) => {
                    let tags: string[] = value.tags
                    return (
                        <button className='post' key={value.name}>
                            <h2><BsCheckCircleFill style={{display: value.verified ? "inline" : "none"}}/>{value.name}</h2>
                            <p>{value.tagline}</p>
                            <a href={value.website} style={{display: value.website ? "block" : "none"}}>{value.website ? "Website" : ""}</a>
                            <div className="progress">
                                <div style={{width:`${(value.current/value.goal)*100}%`}}></div>
                            </div>
                            <div className="progress-labels">
                                <span>{(Math.round((value.current/value.goal)*100))}%</span>
                                <span style={{color:'#000'}}>${value.goal}</span>
                            </div>
                            <div className='tags'>
                                {tags.map((e: string, i: number) => {
                                    return <p>{e}</p>
                                })}
                            </div>
                            <p className='poster' style={{display: (value.poster.length > 0) ? "flex" : "none"}}>
                                <img src={(value.poster.length > 0) ? value.poster[0] : ""}></img>
                                {(value.poster.length > 0) ? value.poster[1] : ""}
                            </p>
                        </button>      
                    )
                }
            ) : 
            <>
            <p id = 'noResult'>There are no results for your search.</p>
            <p id = 'tryDifferentStuff'>Check your spelling or try different keywords.</p></>
            }</div>
    )
}