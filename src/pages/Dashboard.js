import React from 'react';
//import ResponsiveGallery from 'react-responsive-gallery';

function Dashboard() {
    return (
        <>
            <div className="page__title">
                <h1>Mixhi1845</h1>
            </div>

            <a href="https://github.com/mixhi1845">
                <img className="stats__graph" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mixhi1845&theme=transparent" alt="" />
                <img className="stats__numbers" src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=mixhi1845&theme=transparent" alt="" />
                <img
                    className="stats__numbers"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=mixhi1845&hide_border=true&card_width=338&theme=transparent&date_format=j%20M%5B%20Y%5D&mode=weekly&hide_current_streak=true"
                    alt=""
                />
            </a>
            <div className="github-card" data-github="mixhi1845/mixhi1845.github.io" data-width="45%" data-height="155" data-theme="default"></div>

            <div className="page__title">
                <h1>Rupertiexplorer</h1>
            </div>
            <a href="https://github.com/rupertiexplorer">
                <img className="stats__graph" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=rupertiexplorer&theme=transparent" alt="" />
                <img className="stats__numbers" src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=rupertiexplorer&theme=transparent" alt="" />
                <img
                    className="stats__numbers"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=rupertiexplorer&hide_border=true&card_width=338&theme=transparent&date_format=j%20M%5B%20Y%5D&mode=weekly&hide_current_streak=true"
                    alt=""
                />
            </a>
        </>
    );
}

export default Dashboard;
