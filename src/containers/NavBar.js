import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    borderstyle: "double"
   }


  const NavBar = () => 
    
    <div>
        <NavLink to='/' exact style={style} activestyle={{background: 'green'}}>Home</NavLink>
        <NavLink to='/recipes' exact style={style} activestyle={{background: 'green'}}>Recipes</NavLink>
        <NavLink to='/categories' exact style={style} activestyle={{background: 'green'}}>Categories</NavLink>
    </div>

  
  export default NavBar


