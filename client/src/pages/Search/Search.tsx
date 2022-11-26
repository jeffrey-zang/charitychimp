import React from 'react'
import './Search.scss'
import {BsSearch} from "react-icons/bs"

const Search = () => {
  return (
    <div>
      <form>
        <input type="text" name="search" placeholder='Search' required></input>
      </form>
      <button><BsSearch /></button>
    </div>
  )
}

export default Search