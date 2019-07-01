import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom'; 


export default (props) => { 
    return (   
        <ul className="main-nav">
              <li>
                <Link to="/services">Services</Link>
            </li>
             <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                 <Link to="/about">About Us</Link>   
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>         
    </ul> )
} 