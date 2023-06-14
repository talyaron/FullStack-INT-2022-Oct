import React from 'react'
import "./second.css"
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <div>
        <h1>hiii this is the Second page with router</h1>
        <img src="https://tinyjpg.com/images/social/website.jpg" alt="" />
        <Link to='/'>GO to main page</Link>
    </div>
  )
}

export default Second