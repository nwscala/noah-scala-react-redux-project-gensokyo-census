import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'firebrick',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '20px',
  }

const Navbar = () => {
    return (
        <div>
            <h1>Gensokyo Census</h1>
            <div className="linkContainer">
                <NavLink to="/" exact style={link} activeStyle={{ background: "darkred" }}>Home</NavLink>
                <NavLink to="/characters" exact style={link} activeStyle={{ background: "darkred" }}>Characters Index</NavLink>
                <NavLink to="/characters/new" exact style={link} activeStyle={{ background: "darkred" }}>New Character Form</NavLink>
                <NavLink to="/games" exact style={link} activeStyle={{ background: "darkred" }}>Games Index</NavLink>
                <NavLink to="/games/new" exact style={link} activeStyle={{background: "darkred"}}>New Game Form</NavLink>  
            </div>
                
        </div>
    )
}

export default Navbar
