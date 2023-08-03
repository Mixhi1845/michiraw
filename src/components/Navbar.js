// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src="/assets/icons/weblogo.png" alt="profile pic" />
            </Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Blog</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/about">Design</Link>
                </li>
                <li>
                    <Link to="/portfolio">WebDev</Link>
                </li>
                <li>
                    <Link to="/contact">Photography</Link>
                </li>
                <li>
                    <Link to="/contact">3D</Link>
                </li>
            </ul>
            <Link to="/">
                <p>C Michael Wagner</p>
            </Link>
        </nav>
    );
}

export default Navbar;
