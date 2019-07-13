import React from 'react';
import './about.scss';
import aboutPageBackground from '../../assets/images/strips1.png';
import box1 from '../../assets/images/box1.png';
import dotsBox1 from '../../assets/images/dots-box1.png';

const backgroundBox1 = {
    backgroundImage: 'url(${box1})',
};

export default (props) => {
    const imgDots = require('../../assets/images/dots-box1.png');
    return (
    <div>
         <div style={{position:"relative", top:"0", right:"0",backgroundImage:{backgroundBox1}, backgroundSize:'cover',backgroundRepeat:"no repeat",height:"100px",width:"100px"}}> </div>
         <img style={{transform:'rotate(0)',float:'right', backgroundSize:'150px', width:'100px',height:'260px'}} src={aboutPageBackground} />
        
        <section style={{padding:"10px"}}>
            <h3>Delicious cupcakes, magical moments!</h3>
            <p>
               Sweet Corner is growing fast. Our delicious cupcakes of all sizes, shapes and
               colors and tastes are creating a real wow factor.
            </p>
            <p>
                Our delicious cupcakes are different from other bakeries. Why? Well, not only are
                our cupcakes and baked goods prepared fresh every day, we also create
                personalized cupcakes in any size and shape just for you! Simply delicious and
                unique
            </p>
            <p>
                Our expert bakers create stunning cupcakes in any flavor, color, size or shape
                you choose.     
            </p>
            <p>
                Have you seen a stunning cupcake in a magazine, a TV show or on the internet?
                Want something unique to reflect a character or personality? Sweet Corner's
                cupcakes are baked with love and that's why we can create perfect and unique
                cupcake for you.
            </p>
            <p>
                No idea is too creative for our bakers at Sweet Corner cupcakes. Contact us today
                to discuss you special cupcake.
            </p>
        </section>
        <div style={{float:"center",overflow:"auto",width:"100%",}}>
            <img style={{height:"100%", margin:"0 auto",overflow:"auto"}} src={box1}  />
        </div>
     </div>   )
}
