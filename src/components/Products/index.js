
import React from 'react';
import './products.scss';
import { connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import ProductItem from './product_item';


class Products extends React.Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getAllProducts();
    }

    goToDetails(id) 
    {
        this.props.history.push(`/products/${id}`);

    }
    
    render()
    {
        const {products} = this.props; 
        const productElements = products.map(( prod) => {
        return <ProductItem 
                    key={prod.id}
                    goToDetails={() => this.goToDetails(prod.id)} 
                    {...prod} />});                 
        return (
            <div className="products">
               <h1 style={{color:"#754b23"}}className="center">Shop for Cupcakes</h1>               
               {productElements}
            </div>
        )
    }
} 

function mapStateToProps(state)
{
    return {
        products:state.product.list
    }
}

export default connect(mapStateToProps, {getAllProducts})(Products);