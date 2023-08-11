import React from 'react';
import { Link } from 'react-router-dom';

function Socials() {
    return (
        <div class="socials">
            <a href="https://www.instagram.com/michi.raww" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Mixhi1845" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.pinterest.de/michirawdesign" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-pinterest"></i>
            </a>
            <Link to="/links" target="_blank">
                <i class="fa-solid fa-link"></i>
            </Link>
        </div>
    );
}

export default Socials;
