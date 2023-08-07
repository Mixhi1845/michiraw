import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Design from './components/professions/Design';
import WebDev from './components/professions/WebDev';
import Photography from './components/professions/Photography';
import Blender from './components/professions/Blender';
import ProjectSeminar from './components/professions/ProjectSeminar';

import About from './components/About';
import Blog from './components/Blog';

import Imprint from './components/Imprint';
import NotFound from './components/NotFound';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/design" element={<Design />} />
                        <Route path="/webdev" element={<WebDev />} />
                        <Route path="/photography" element={<Photography />} />
                        <Route path="/psem" element={<ProjectSeminar />} />
                        <Route path="/blender" element={<Blender />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/imprint" element={<Imprint />} />
                        <Route element={NotFound} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;
