// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/weblogo.svg';

function Navbar() {
    return (
        <header className="site-header">
            <div className="wrapper site-header__wrapper">
                <div className="site-header__start">
                    <Link className="brand" to="/">
                        <img src={logo} alt="weblogo" />
                    </Link>
                </div>
                <div className="site-header__middle">
                    <nav className="nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <Link to="/design">Design</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/webdev">WebDev</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/photography">Photography</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/psem">Project Seminar</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/blender">Blender</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="site-header__end">
                    <nav className="nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
