import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getCartTotals } from '../../actions';

export class CartWidget extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {getCartTotals } = this.props;
        getCartTotals();
    }

    render()
    {
        let item = 0;
        if(this.props.total)
            item = this.props.total.items;
                  
        return (        
            <li className="cart-widget">
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                    <span className="cart-item-count">{item}</span>
                </Link>
            </li>
        )    
        
    }
} 

function mapStateToProps(state)
{
    return {
        total:state.cart.total
    }
}

export default connect(mapStateToProps, {getCartTotals})(CartWidget);