import React from 'react';
import './footer.scss';
import Background1 from '../../assets/images/dots-footer.png';
import Background2 from '../../assets/images/phone.png';

const footerStyle1 = {
    backgroundPosition:'center center',
    backgroundColor:'lightgreen',
    height:'90px',
    
    width:'100%',
    bottom:0,
    margin:'20px auto'     
}   

export default (props) => {
    return (
    <div style={footerStyle1}>
        <div style={{display: 'inline-block',  justifyContent:'left', alignItems:'center', height: '100px',width:'15px'}}>
            <img  src={Background1} />
        </div>
        <div style={{color:"blue",position:'absolute',top:"220%",right:"30%",display: 'inline-block', justifyContent:'center',alignItems:'center', height: '90px',width:'30%'}} >
            <span style={{bottom:"40px",height:"5px", width:"5px"}}> Copyright &copy; 2019 Sweet Corner. All right reserved.  </span>
        </div>   
        <div style={{position:"absolute",top:"220%",right:"10%",display:'inline-block', justifyContent:'right',  height: '100px',width:'15%'}}> 
            <img style={{margin:'4px'}} src={Background2} /> 
            <span style={{height:"3px"}}>909-555-2222</span>
        </div>     
    </div>)
}