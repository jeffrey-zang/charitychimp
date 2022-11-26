import React from "react";
import {AppContext} from "../../AppContext"
import './Post.scss'

export default function Post() {
    const context = React.useContext(AppContext)
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        context.addCharity(form)
        console.log({form, charities: context.charities})
    }

    const [form, setForm] = React.useState<any>({
        name: "",
        tagline: "",
        thumbnailUrl: "",
        goal: 0,
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof typeof form) => {
        e.preventDefault()
        let thing = {...form}
        thing[key] = e.target.value
        setForm(thing)
    }

    return (
        <div id="Post">
            <h1>Post a charity</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Charity Name</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "name")}} value={form.name} type="text" name="charity-name" placeholder='Society for the housing of displaced orphans' required></input>

                <label htmlFor="tagline">Tagline</label>
                <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {onChange(e, "tagline")}} value={form.tagline} id="w3review" name="w3review" rows={4} cols={50} placeholder="Do you have way too many extra orphans in your basement? Send them to us and we'll ensure that they find a new home!"></textarea>
                
                <label htmlFor="thumbnail-url">Thumbnail Image URL</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "thumbnailUrl")}} value={form.thumbnailUrl} type="url" name="thumbnail-url" placeholder="https://drive.google.com/file/d/10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ/"></input>

                <label htmlFor="goal">Dollar goal</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "goal")}} value={form.goal} type="number" name="goal" placeholder="41968"></input>

                <button type="submit">Post</button>
            </form>
        </div>
    )
}