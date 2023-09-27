import React from 'react';
import "./ReviewItems.css"

const ReviewItems = ({product}) => {
    const {id,img, name, price, quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <p className='product-title'>{name}</p>
                <p>Price: <span>${price}</span></p>
                <p>Order Quantity: {quantity}</p>
            </div>
            <button>D</button>
        </div>
    );
};

export default ReviewItems;