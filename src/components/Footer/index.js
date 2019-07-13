import React from 'react';
import './footer.scss';
import Background1 from '../../assets/images/dots-footer.png';
import Background2 from '../../assets/images/phone.png';

const footerStyle1 = {    
    backgroundColor:'lightgreen',
    height:'90px',
    width:'100%',
    bottom:0,
       
}   

export default (props) => {
    return (
    <div style={footerStyle1}>
        <div style={{position:"relative", top:"0", left:"0",display: 'inline-block',  overflow:"0", justifyContent:'left', alignItems:'center', height: '100%',width:'30px'}}>
            <img  src={Background1} />
        </div>
        <div style={{color:"blue",position:'relative',overflow:"auto",top:"0",left:"30%",display: 'inline-block', height: '90px',width:'40%'}} >
            <span style={{postion:"relative",top:"25%",height:"5px"}}> Copyright &copy; 2019 Sweet Corner. All right reserved.  </span>
        </div>   
        <div style={{position:"relative",overflow:"auto" ,top:"0",left:"35%",display:'inline-block', height: '100px',width:'20%'}}> 
            <img style={{position:"relative",margin:'5px', top:"25%",float:"left"}} src={Background2} /> 
            <span style={{position:"relative",margin:'5px',top:"25%",height:"2px",right:"5px",color:"blue"}}>909-555-2222</span>
        </div>     
    </div>)
}