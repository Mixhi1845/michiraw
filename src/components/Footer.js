// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import Socials from './modules/Socials';

function Footer() {
    return (
        <footer>
            <div className="footer__wrapper">
                <p className="p__bold">©️ 2023 Michael Wagner. All rights reserved</p>

                <Socials />

                <div>
                    <Link to="/imprint">
                        <p className="p__bold">Imprint</p>
                    </Link>
                    <Link to="/archive">
                        <p className="p__bold">Archiv</p>
                    </Link>
                    <Link to="/dashboard">
                        <p className="p__bold">Dashboard</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
