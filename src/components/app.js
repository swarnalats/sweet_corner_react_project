import React from 'react';
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home' ;
import Services from './Services';

export default () => { 
    return ( 
    <div className="app">
        <div className="container">
            <Header />
                        
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route path="/Services" component={Services} />

            <Footer />
        </div>
    </div>)
}
