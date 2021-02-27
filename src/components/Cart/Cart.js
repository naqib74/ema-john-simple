import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orderd:{cart.length}</h5>
        </div>
    );
};

export default Cart;