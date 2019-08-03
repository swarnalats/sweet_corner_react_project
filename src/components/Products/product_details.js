import React from 'react';
import { connect} from 'react-redux';
import {clearProductDetails, getProductDetails} from '../../actions';
import { addItemToCart } from '../../actions';


export class ProductDetails extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            quantity:5
        };
    }
    componentDidMount()
    {
        const { getProductDetails, match: { params } } = this.props;
        getProductDetails(params.product_id);
    }

    componentWillUnmount()
    {
        console.log("Component about to be unmounted");
        this.props.clearProductDetails();

    }

    incrementQuantity()
    {
        this.setState({
            quantity:this.state.quantity + 1
        });
    }
    
   decrementQuantity()
   {
       const { quantity } = this.state;

       if(quantity >= 2)
       {
           this.setState({
               quantity:quantity - 1
           });
       }
   }
   async handleAddToCart()
   {
    const { id } = this.props.details;
    const { quantity } = this.state;
    await this.props.addItemToCart(quantity, id);
    this.props.history.push('/cart');
   }
    render()     
    {
        const { details} = this.props;
        if( details == null ){
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else 
        {
        return (
            
        <div className="product-details">
            
            <div style={{display:"inline-block",position:"relative",left:"9%",top:"1px"}}> <img style={{height:"350px",width:"350px",padding:"10px"}} src={details.thumbnail.url} /></div>
            <div className="productImage">
                <h1 style={{position:"relative",fontFamily:"arial",color:"#754b23",fontWeight:"bold"}}> {details.name} </h1>
                <p style={{position:"relative",top:"5px",fontFamily:"arial",color:"#754b23"}}>{details.caption}</p>
                <h2 style={{position:"relative",top:"10px",fontFamily:"arial",color:"#754b23",}}>Description</h2>
                <p style={{position:"relative",top:"15px",fontFamily:"arial",color:"#754b23"}}>{details.description}</p>
                <div style={{width:"100px",position:"relative",left:"300px",top:"20px",fontSize:"30px",fontWeight:"bold",color:"#754b23"}}>${details.cost/100}</div>
            {/* </div> */}
            {/* <div className="product-quantity right mb-3">        */}
                {/* <h2 className="left">Quantity</h2> */}
                <div style={{display:"inline-block"}}className="quantity-controls">
                    <h2 style={{fontFamily:"arial",color:"#754b23"}} >Quantity</h2>
                    <button className="btn btn-quantity" onClick={this.decrementQuantity.bind(this)}>-</button>
                    <span style={{fontFamily:"arial",fontWeight:"bold",color:"#754b23"}}className="quantity">{this.state.quantity}</span>
                    <button onClick={this.incrementQuantity.bind(this)} className="btn btn-quantity">+</button>
                </div>
                <button style={{color:"#754b23",height:"40px",width:"120px",margin:"5px 0",fontFamily:"arial",fontSize:"15px",fontWeight:"bold",backgroundColor:"aquamarine"}}onClick={this.handleAddToCart.bind(this)}>Add to cart</button>
            </div>
        </div>)
    }
  }
}

function mapStateToProps(state)
{
    return {
        details:state.product.details
    }
}

export default connect(mapStateToProps, { clearProductDetails, getProductDetails, addItemToCart})(ProductDetails);  

