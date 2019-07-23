import React from 'react';
import Money from '../general/money';


export default (props) => {
    console.log("PROPS",props);
    return (
        
    <div className = "product-item center"  onClick={props.goToDetails}>
         <div className="imageStyle">  
            <div style={{padding:"30px"}}>
                <div style={{fontSize:'20px',fontWeight:'bold'}}>{props.name}</div>            
                <img src={props.thumbnail.url } />
            </div> 
            <div style={{wordWrap:"break-word" ,width:"280px", textAlign:"center"}}>     
                {props.caption}
            </div>
            <Money cost={props.cost} />  
        </div>    
    </div>    
)}