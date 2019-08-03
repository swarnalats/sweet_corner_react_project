import React from 'react';
import './cart.scss';
import { connect} from 'react-redux';
import { getActiveCart } from '../../actions/index';
import { Link } from 'react-router-dom'; 

export class Cart extends React.Component {

    componentDidMount()
    {
        this.props.getActiveCart();
    }
    render()
    {
        const {cartItems} = this.props; 
        const { totals} = this.props;
                    
        return (
            <div className="cart-Items" style={{fontFamily:"arial",color:"#754b23"}}>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Each</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                               {
                                   cartItems  ? 
                                   cartItems.map(item => (
                                        <tr>
                                            <td>
                                                <img src={item.thumbnail.url} style={{height:"100px", width:"100px"}}/>  
                                            </td>
                                            <td className="cartdata">{item.name}</td>
                                            <td className="cartdata" >{item.each/100}</td>
                                            <td className="cartdata">{item.quantity}</td>
                                            <td className="cartdata">${item.total/100} </td>
                                        </tr>
                                    )): ( <tr>
                                            <td>No Data</td>
                                        </tr>)
                                }                               
                         </tbody>
                    </table>
                    <h3 style={{display:"inline-block", position:"relative" ,left:"300px",fontSize:"32px",fontFamily:"arial",color:"#754b23"}}> Cart Total:</h3>
                    {
                        totals ?
                        (<span style={{position:"relative",left:"500px",fontSize:"30px", fontFamily:"arial",color:"#754b23",}}>{totals.items}</span>):
                        0 
                    }
                    {
                        totals ? 
                        (<span style={{position:"relative", left:"630px",fontSize:"30px",fontFamily:"arial",color:"#754b23"}}> ${totals.cost/100}</span>):
                        0
                    }
                <div style={{height:"70px", bottom:"10px",width:"350px",backgroundColor:"grey", position:"relative",margin:"0 auto",fontFamily:"arial",fontSize:"25px",textAlign:"center"}}>    
                    <Link style={{position:"relative",top:"17px",textDecoration:"none"}}to="/checkout/guest">Checkout As Guest</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         cartItems: state.cart.items,
         totals:state.cart.total       
         }     
    }

export default connect(mapStateToProps,{ getActiveCart })(Cart); 