import React from "react";
import {AppContext} from "../../AppContext";
import './Post.scss';
import { TagsInput } from 'react-tag-input-component';
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Post() {
    const navigate = useNavigate();
    const context = React.useContext(AppContext)
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        context.addCharity(form)
        navigate('/postsuccess')
    }

    const [form, setForm] = React.useState<any>({
        name: "",
        tagline: "",
        thumbnailUrl: "",
        goal: 0,
        current: 0,
        tags: [],
        verified: false,
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof typeof form) => {
        e.preventDefault()
        let thing = {...form}
        thing[key] = e.target.value
        setForm(thing)
    }

    return (
        <div id="Post">
            <h1>Post a charity <AiFillHeart/></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Charity Name</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "name")}} value={form.name} type="text" name="charity-name" placeholder='Society for the housing of displaced orphans' required></input>

                <label htmlFor="tagline">Tagline</label>
                <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {onChange(e, "tagline")}} value={form.tagline} id="w3review" name="w3review" rows={4} cols={50} placeholder="Do you have way too many extra orphans in your basement? Send them to us and we'll ensure that they find a new home!"></textarea>
                
                <label htmlFor="thumbnail-url">Thumbnail Image URL</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "thumbnailUrl")}} value={form.thumbnailUrl} type="url" name="thumbnail-url" placeholder="https://drive.google.com/file/d/10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ/"></input>

                <label htmlFor="goal">Dollar goal</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "goal")}} value={form.goal} type="number" name="goal" min='0' placeholder="1000" required></input>

                <label htmlFor="current">Current funds</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "current")}} value={form.current} type="number" name="current" min='0' placeholder="500" required></input>
                
                <label htmlFor="verified">Verified 501(c) nonprofit</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChange(e, "current")}} value={form.verified} type="checkbox" name="verified"></input>

                <label htmlFor="tags" id="tags-label">Tags</label>
                <TagsInput
                    value={form.tags}
                    onChange={(tags) => {setForm({...form, tags})}}
                    name="tags"
                    placeHolder="Add a tag..."
                ></TagsInput>

                <button type="submit">Post</button>
            </form>
        </div>
    )
}