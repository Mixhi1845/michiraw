// components/WebDev.js
import React from 'react';
import Project from '../../components/modules/Project';
import './WebDev.css';

//assets
import src3 from '../../images/webdesign/fulls/PortfolioImglight.png';

function WebDev() {
    return (
        <>
            <div className="hero__profession">
                <h1>Web Design & Development</h1>
                <p>
                    I've gathered valuable Webdesign and Development experience through personal Projact and also school project. For example my first non personal project is the "Ruperti Explorer"
                    which I've designed and developed in computer science class.
                </p>
            </div>
            <div class="main-content">
                <main>
                    <div class="main-grid">
                        <Project src="" title="Internship" LinkTo="/webdev/internship" />
                        <Project src="" title="Portolio V1" LinkTo="/webdev/portfoliov1" />
                        <Project src={src3} title="Ruperti Explorer" LinkTo="/webdev/rupertiexplorer" />
                        <Project src="" title="Portolio V2" LinkTo="/webdev/portfoliov2" />
                        <Project src="" title="Portolio V3" LinkTo="/webdev/portfoliov3" />
                    </div>
                </main>
            </div>
        </>
    );
}

export default WebDev;

//Projekte: Internship, mixhi1845.github v1 und v2, RuExp, und Portfolio v3 mit portfoliokart und live demo link. In website einbauen und lokal hosten?
// TEMPLATE FÜR ALLE BLOGEINTRÄGE ERSTELLLENN
// extra bilder für previews machen mit weniger als 100kb größe
