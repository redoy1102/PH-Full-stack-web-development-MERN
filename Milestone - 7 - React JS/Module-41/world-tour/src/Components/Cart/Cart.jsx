import React from 'react';
import '../Bottle/Bottle.css';
import '../Utilities/utilities.css'

const Cart = ({bottle, handleRemoveFromCart}) => {

    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = bottle;
    
    return (
        <div className='bottle center'>
            <h2>{name}</h2>
            <img src={img} alt="bottle" />
            <div className='info_container'>
                <div>
                    <p><b>Price: ${price}</b></p>
                    <p>Stock: {stock}</p>
                </div>
                <div>
                    <p>Ratings: {ratings}</p>
                    <p>Brand: {seller}</p>
                </div>
            </div>
            <button className='cart_btn' onClick={() => handleRemoveFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cart;