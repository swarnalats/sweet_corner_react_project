import React from 'react';
import './footer.scss';
import Background1 from '../../assets/images/dots-footer.png';
import Background2 from '../../assets/images/phone.png';

const footerStyle1 = {
    backgroundPosition:'center center',
    backgroundColor:'lightgreen',
    height:'70px',
    
    width:'100%',
    bottom:0,
    margin:0,
    padding:0
}   

 
export default (props) => {
    return (
    <div style={footerStyle1}>
        <div style={{display: 'inline-block',  justifyContent:'left', alignItems:'center', height: '100%',width:'15%'}}>
            <img  src={Background1} />
        </div>
        <div style={{color:"blue",position:'absolute',top:"85%",right:"30%",display: 'inline-block', justifyContent:'center',alignItems:'center', height: '100%',width:'30%'}} >
            <span style={{height:"5px", width:"5px"}}> Copyright &copy; 2019 Sweet Corner. All right reserved.  </span>
        </div>   
        <div style={{position:"absolute",top:"85%",right:"10%",display: 'inline-block', justifyContent:'right',  height: '100%',width:'15%'}}> 
            <img style={{padding:"4px", margin:"2px"}} src={Background2} /> 
            <span >909-555-2222</span>
        </div>
                
    </div>)
}