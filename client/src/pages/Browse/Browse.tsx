import React from "react";
import {AppContext} from "../../AppContext"
import {BsSearch} from "react-icons/bs"

export default function Browse() {
    const context = React.useContext(AppContext)
    const charities = context.charities

    return (
        <div>
            <form>
                <input type="text" name="search" placeholder='Search' required></input>
            </form>
            <button><BsSearch /></button>
        </div>
    )
}