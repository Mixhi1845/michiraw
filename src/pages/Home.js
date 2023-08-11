// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Socials from '../components/modules/Socials';

import recentBlogTitle from './Blog';
import recentBlogTxt from './Blog';

//für manche sachen bootsrap komponenten oder material zeug verwenden?

function Home() {
    return (
        <>
            <div className="hero">
                <div className="hero__txt">
                    <h1>
                        Graphic Designer & <br />
                        Front-End Developer
                    </h1>
                    <p>
                        Hi, i’m Michael Wagner, also known as @michi.raw, <br />a passionate Designer, WebDev & Photographer who is <br />
                        based in Germany 📍
                    </p>

                    <div className="hero__socials">
                        <Socials />
                    </div>

                    <div className="hero__stack">
                        <p>Tech Stack</p>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-react"></i>
                    </div>
                </div>
                <div className="hero__img">
                    <img src="https://placehold.co/400x400/000/FFF?text=pic+of+me&font=opensans" alt="" />
                </div>
            </div>

            <div className="profcards">
                <div className="card">
                    <Link className="card__link" to="/design">
                        <img className="card__img" src="https://placehold.co/300x300/c0c0ab/000?text=Graphic+Design\nexample&font=opensans" alt="" />

                        <div className="card__txt">
                            <p>Graphic Design</p>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/webdev">
                        <img className="card__img" src="https://placehold.co/300x300/c0c0ab/000?text=Front+End+Development\nexample&font=opensans" alt="" />
                        <div className="card__txt">
                            <p>Front End Development</p>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/photography">
                        <img className="card__img" src="https://placehold.co/300x300/c0c0ab/000?text=Photography\nexample&font=opensans" alt="" />
                        <div className="card__txt">
                            <p>Photography</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="section">
                <div className="section__wrapper">
                    <h2>Recent Blog Article</h2>

                    <img className="blog__img" src="https://placehold.co/300x300/c0c0ab/000?text=Blog\nexample&font=opensans" alt="" />

                    <div className="blog__txt">
                        <p className="p__bold">{recentBlogTitle}My Personal Portfolio Journey</p>
                        <p>
                            {recentBlogTxt}Lorem ipsum dolor sit amet consectetur. Sollicitudin consequat consectetur felis amet vitae risus. Quis interdum magna adipiscing ultricies id in vitae in
                            etiam. Vulputate tortor in senectus tempor. Dictum adipiscing cras venenatis eget et amet ullamcorper. Vestibulum egestas posuere ultrices molestie tempor metus consequat
                            nulla feugiat. Ac quisque orci diam.
                        </p>
                        <Link to="/blog">
                            <button>READ THE ARTICLE</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section__wrapper">
                    <h1>Let’s create something together!</h1>
                    <p>you can contact me over email or on my socials</p>
                    <div className="contact__wrapper">
                        <div className="contact__field">
                            <p className="p__bold">Mail</p>
                            <p>michael.wagner@design.com</p>
                        </div>
                        <div className="contact__field">
                            <p className="p__bold">Socials</p>

                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// short header text+image, typical portfolio landing page presenting my skills in apps an dev stack...

export default Home;
