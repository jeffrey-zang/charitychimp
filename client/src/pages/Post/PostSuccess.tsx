import React from 'react'
import './Post.scss'
import { Link } from 'react-router-dom'

const PostSuccess = () => {
  return (
    <div id='postsuccess'>
      <h2>Success! Your post was created.</h2>
      <p>Find it <Link to='/browse'>here.</Link></p>
    </div>
  )
}

export default PostSuccess