import React from 'react';
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import Home from './Home' ;
import Services from './Services';
import Nav from './Nav';
import Products from './Products';
import ProductDetails from '../components/Products/product_details'; 

export default () => { 
    return ( 
    <div className="app">
        <div className="container">
            <Header />

                                   
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/products" component={Products}/>
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route exact path="/" component={Home} />
            <Route path="/Services" component={Services} />

            <Footer />
        </div>
    </div>)
}
