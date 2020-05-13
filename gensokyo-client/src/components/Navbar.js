import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'white',
  }

const Navbar = () => {
    return (
        <div>
            <h1>Gensokyo Census</h1>
            <NavLink to="/" exact style={link} activeStyle={{ background: "darkred" }}>Home</NavLink>
            <NavLink to="/characters" exact style={link} activeStyle={{ background: "darkred" }}>Characters Index</NavLink>     
        </div>
    )
}

export default Navbar
