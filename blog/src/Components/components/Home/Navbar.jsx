import React from 'react'
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                 <NavLink 
                 to="/Create"
                   className={(navData) =>
                  navData.isActive ? style.active : style.NormalLi
                }  >
                  Create Post
                 </NavLink>
                 <NavLink 
                 to="/Posts"
                   className={(navData) =>
                  navData.isActive ? style.active : style.NormalLi
                }  >
                  Posts
                 </NavLink>
            </div>
        </nav>
    </div>
  )
}
