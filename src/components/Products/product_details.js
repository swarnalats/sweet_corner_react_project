import React from 'react';
import { connect} from 'react-redux';
import {clearProductDetails, getProductDetails} from '../../actions';


export class ProductDetails extends React.Component {

    constructor(props)
    {
        super(props);
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
            
            <div style={{display:"inline-block",position:"relative",left:"10%",top:"1px"}}> <img style={{height:"350px",width:"350px",padding:"15px"}} src={details.thumbnail.url} /></div>
            <div className="productImage">
                <h1 style={{position:"relative",top:"50px",fontFamily:"arial",color:"#754b23",fontWeight:"bold"}}> {details.name} </h1>
                <p style={{position:"relative",top:"55px",fontFamily:"arial",color:"#754b23"}}>{details.caption}</p>
                <h2 style={{position:"relative",top:"60px",fontFamily:"arial",color:"#754b23",}}>Description</h2>
                <p style={{position:"relative",top:"65px",fontFamily:"arial",color:"#754b23"}}>{details.description}</p>
                <div style={{position:"relative",float:"right",top:"75px",fontSize:"30px",fontWeight:"bold",color:"#754b23"}}>${details.cost/100}</div>
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

export default connect(mapStateToProps, { clearProductDetails, getProductDetails})(ProductDetails);  

