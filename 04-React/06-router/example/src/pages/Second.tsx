import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
   

  return (
    <div>
        <h1>Second page</h1>
        <Link to='/'>GO to main page</Link>
        <br/>
        <Link to="/profile/123">Go to user 123</Link>
    </div>
  )
}

export default Second