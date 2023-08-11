// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

//für manche sachen bootsrap komponenten oder material zeug verwenden?

function Links() {
    return (
        <>
            <img src="/assets/icons/weblogo.png" alt="profile picture" class="profile-picture"></img>

            <div class="profile-name">@michi.raw</div>

            <a href="/index.html" class="links">
                GALLERY
            </a>
            <a href="https://www.instagram.com/michi.raww" class="links">
                INSTAGRAM
            </a>
            <a href="https://www.pinterest.de/michirawdesign" class="links">
                PINTEREST
            </a>
            <a href="https://medium.com/@michi.raw" class="links">
                BLOG
            </a>
            <a href="mailto:wagnermichael1845@gmail.com?subject=Portfolio response" class="links">
                CONTACT
            </a>

            <div class="bottom-text">michi.raw</div>
        </>
    );
}

//<a href="#" class="links">FREEBIES</a>
//<a href="#" class="links">TWITTER</a>

// short header text+image, typical portfolio landing page presenting my skills in apps an dev stack...

export default Links;
