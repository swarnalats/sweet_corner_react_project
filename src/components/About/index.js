import React from 'react';
import './about.scss';
import aboutPageBackground from '../../assets/images/strips1.png';
import box1 from '../../assets/images/box1.png';
import dotsBox1 from '../../assets/images/dots-box1.png';

const backgroundStyle1 = {
    backgroundImage: `url(${aboutPageBackground})`,
    float:'right',
    width: '160px',
    height: '400px'
}

const dotsBox1Image = {
    backgroundImage: `url(${dotsBox1})`,
    float:'right',
    width: '100px',
    height: '450px',
    backgroundRepeat:"no-repeat",
    position:"relative",
    top:"100px",    
}

export default (props) => {
    return (
    <div style={{position:"relative"}} >
         <div style={backgroundStyle1}>            
        </div>
        <div style={dotsBox1Image}>
        </div>
        
        <section style={{margin:"20px", width:"600px",color:"#754b23",fontFamily:"arial" }}>
            <h1>Delicious cupcakes, magical moments!</h1>
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
        <div style={{position:"relative"}}>
            <img style={{position:"relative",width:"1000px",margin:"40px auto",height:"400px"}} src={box1}  />
        </div>
     </div>   )
}
