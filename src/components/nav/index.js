import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom'; 
import  CartWidget from './cart-widget';


export default (props) => { 
    return (   
        <ul className="main-nav" style={{fontFamily:"arial",color:"#754b23"}}>
             <li>
                <Link to="/">Home</Link>
            </li>
             <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                 <Link to="/contact">Contact</Link>   
            </li>
            <li>
                <Link to="/Services">Services</Link>
            </li>   
            <CartWidget />
    </ul>
    )
} 