import React from 'react';
import './header.scss';
import Nav from '../Nav';
import Background1 from '../../assets/images/header.png';
import Background2 from '../../assets/images/logo.png';

export default (props) => {
     
    const headerStyle1 = {
        
        width:'100%',
        height:'80px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${ Background1 })`,
        backgroundSize: 'cover' 
    };
    const headerStyle2 = {
        
        width:'100%',
        height:'300px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${ Background2 })`,
         
    };

    const headerStyle3 = {
        textAlign: 'center',
    };

    const headerStyle4 = {
        backgroundColor:'#754b23',
        backgroundPosition:'center center',
        height:'24px',
        width:'700px',
        margin:'0 auto',
        
    }
    return (
        <div>
            <div style ={headerStyle1}></div>
            <Nav />
            <div style = {headerStyle2}></div>
            <div className="fancy" style = {headerStyle3}>
                We deliver cupcakes for the important events in your life!!  
            </div>
            <div style={headerStyle4}></div>
        </div>    
        )    
}  