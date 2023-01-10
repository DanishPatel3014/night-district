import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Website/Home'
import NotFound from '../views/NotFound'
import Header from '../components/Website/Header';
import Footer from '../components/Website/Footer';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <Header />
                <RouteSwitch>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer />
            </Router>
        </div>
    )
}