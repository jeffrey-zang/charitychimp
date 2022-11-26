import React from "react";
import './Post.scss'

export default function Post() {
    return (
        <div id="Post">
            <h1>Post a charity</h1>
            <form>
                <label htmlFor="name">Charity Name</label>
                <input type="text" name="charity-name" placeholder='Society for the housing of displaced orphans' required></input>

                <label htmlFor="tagline">Tagline</label>
                <textarea id="w3review" name="w3review" rows={4} cols={50} placeholder="Do you have way too many extra orphans in your basement? Send them to us and we'll ensure that they find a new home!"></textarea>
                
                <label htmlFor="thumbnail-url">Thumbnail Image URL</label>
                <input type="url" name="thumbnail-url" placeholder="https://drive.google.com/file/d/10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ/"></input>
            </form>
        </div>
    )
}