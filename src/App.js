import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Design from './pages/professions/Design';
import WebDev from './pages/professions/WebDev';
import Photography from './pages/professions/Photography';
import Blender from './pages/professions/Blender';
import ProjectSeminar from './pages/professions/ProjectSeminar';

import About from './pages/About';
import Blog from './pages/Blog';
//import Dashboard from './pages/Dashboard';
//import Archiv from './pages/Archiv';
import Links from './pages/Links';

import Imprint from './components/Imprint';
import NotFound from './components/NotFound';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/professions/design" element={<Design />} />
                        <Route path="/professions/photography" element={<Photography />} />
                        <Route path="/professions/webdev" element={<WebDev />} />
                        <Route path="/professions/blender" element={<Blender />} />
                        <Route path="/professions/psem" element={<ProjectSeminar />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/links" element={<Links />} />

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
