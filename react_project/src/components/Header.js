import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to='/'>ShareNotes</NavLink>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className='nav-link' to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className='nav-link' to='/note'>Note</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className='nav-link' to='/create'>Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className='nav-link' to='/about'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
