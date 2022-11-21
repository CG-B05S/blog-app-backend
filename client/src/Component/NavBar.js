import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <div className='container__header'>
        <p>The</p>
        <h1>Siren</h1>


      </div>
      <br></br>
      <br></br>

      <div className='nav'>

        <Link style={{ color: "gray", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/bollywood" >Bollywood</Link>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/technology">Technology</Link>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/hollywood">Hollywood</Link>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/fitness">Fitness</Link>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/food">Food</Link>

      </div>
      <br />
      <hr></hr>
    </div>
  )
}

export default NavBar