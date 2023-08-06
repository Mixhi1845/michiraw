// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer__wrapper">
                <p className="p__bold">©️ 2023 Michael Wagner. All rights reserved</p>
                <Link to="/imprint">
                    <p className="p__bold">Imprint</p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
