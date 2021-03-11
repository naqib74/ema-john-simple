import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const cart=props.cart
    const total=cart.reduce((sum,cart) => sum + cart.price,0);
    // const totalPrice=total + product.price * product.quantity ;
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orderd:{cart.length}</h5>
            <h5>Total price:{total}</h5>
            {/* <h4>Total:{totalPrice}</h4> */}
            <br/>
            <Link to="/review"><button className="main-btn">Review Order</button></Link>
        </div>
    );
};

export default Cart;