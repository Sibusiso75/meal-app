import React from 'react'
import { Link } from 'react-router-dom';
import {FaHome} from "react-icons/fa"


function Navbar() {
  return (
    <nav className="navbar">
<Link to="/" style={{color:"white",textDecoration:"none", fontWeight:"bold"}}>
<FaHome/> Home </Link>
    <div className="nav-links">
      
      <Link to="/favorites">Favorites</Link>
    </div>
    </nav>
  )
}

export default Navbar
