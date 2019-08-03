import React from 'react';
import Money from '../general/money';


export default (props) => {
     return (
        
    <div className = "product-item center"  onClick={props.goToDetails}>
         <div className="imageStyle">  
            <div style={{padding:"10px"}}>
                <div style={{fontSize:'20px',fontWeight:'bold',fontFamily:"arial",color:"#754b23"}}>{props.name}</div>            
                <img src={props.thumbnail.url } />
            </div> 
            <div style={{wordWrap:"break-word" ,width:"260px", textAlign:"center",fontFamily:"arial",color:"#754b23"}}>     
                {props.caption}
            </div>
            <Money cost={props.cost} />  
        </div>    
    </div>    
)}