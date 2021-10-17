import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    var logo ="/images/logo.png";

    return (
        <div className="main-navbar-wrap" id="main-header">
            <div className="container-fluid">
                <div className="main-navbar">
                    <div className="logo"><NavLink to='/'><img src={logo} alt="logo" /></NavLink></div>
                    <div className="navbar">
                        <ul>
                            <li><NavLink to=''>Home</NavLink></li>
                            <li><NavLink to=''>About</NavLink></li>
                            <li><NavLink to=''>Our Solution</NavLink></li>
                            <li><NavLink to=''>Difference</NavLink></li>
                            <li><NavLink to=''>How it Works</NavLink></li>
                            <li><NavLink to=''>Get Some</NavLink></li>
                            <li><NavLink to=''>Team</NavLink></li>
                            <li><NavLink to=''>Roadmap</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>       
        </div>
    )
}
