import React from 'react';

const ReviewItem = (props) => {
   const {name , quantity, key} =props.product;
   const reviewItemStyles={
       borderBottom:'1px solid lightgray',
       marginBottom:'5px',
       paddingBottom:'5px',
       marginLeft:'200px'

   }
    return (
        <div style={reviewItemStyles}>
            <h3 className='product-name'>{name}</h3>
            <p> Quantity:{quantity}</p>
            <br/>
            <button className="main-btn" onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;