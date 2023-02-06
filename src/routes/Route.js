import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Website/Home'
import AboutUs from '../views/Website/AboutUs';
import ContactUs from '../views/Website/ContactUs';
import Reviews from '../views/Website/Reviews';
import NotFound from '../views/NotFound'
import Header from '../components/Website/Header';
import Footer from '../components/Website/Footer';
import Bars from '../views/Website/Bars';
import StoreProfile from '../views/Website/StoreProfile';
import BarOwner from '../views/Website/BarOwner';
import Dashboard from '../views/Dashboard/Home/index.js'
import Menu from '../views/Dashboard/Menu/index.js';
import Subscription  from '../views/Dashboard/Subscription/index.js';
import Event  from '../views/Dashboard/Event/index.js';
import Feed  from '../views/Dashboard/Feed/index.js';
import { useEffect } from 'react';



export const UserContext = createContext()

export default function AppRoute() {


    

    return (
        <div>
            <Router>
                <Header />
                <RouteSwitch>

                    {/* Website-Routes */}

                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/AboutUs" element={<AboutUs />}></Route>
                    <Route exact path="/ContactUs" element={<ContactUs />}></Route>
                    <Route exact path="/Reviews" element={<Reviews />}></Route>
                    <Route exact path="/Bars" element={<Bars />}></Route>
                    <Route exact path="/StoreProfile" element={<StoreProfile />}></Route>
                    <Route exact path="/BarOwner" element={<BarOwner />}></Route>


                    {/* Website-Routes */}


                    {/* Dashboard-Routes */}
                    
                    <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route exact path="/dashboard/menu" element={<Menu />}></Route>
                    <Route exact path="/dashboard/subscription" element={<Subscription />}></Route>
                    <Route exact path="/dashboard/event" element={<Event />}></Route>
                    <Route exact path="/dashboard/feed" element={<Feed />}></Route>


                    {/* Dashboard-Routes */}
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer />
            </Router>
        </div>
    )
}