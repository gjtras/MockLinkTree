import React from 'react';
import { Link } from "react-router-dom";
// import style from'./navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="navbar-brand" >MockLinkTree</div>
        <div className='links'>

            <ul className='navbar-nav'>
                <li className='nav-item '><Link to="/" className="nav-link">View Linktree <span /> </Link></li>
            
                <li className='nav-item '><Link to="/add" className="nav-link">Modify Linktree</Link></li>
           
            </ul>
        </div>
    </div>

  )
}
