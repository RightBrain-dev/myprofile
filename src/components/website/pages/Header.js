import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/header.css'
function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <NavLink className="navbar-brand rb_navbar" to="#">Right Brain Civil</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse rb_navbar_collapse" id="navbarText">
                    <ul className="navbar-nav rb_menu me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">Features</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>
            </nav>
        </>
    )
}

export default Header
