// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Import your components
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Add routes for other pages */}
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
