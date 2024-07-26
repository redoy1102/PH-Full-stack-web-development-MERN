import React, { useState } from 'react';
// import { multiply, sum } from '../Utilities/calculate';
import './Bottle.css'
import '../Utilities/utilities.css'

// eslint-disable-next-line react/prop-types
const Bottle = ({ bottle, handleAddToCart }) => {
    const [likeCount, setLikeCount] = useState(0);

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
            <div className='btn_container'>
                <button className='cart_btn' onClick={() => handleAddToCart(bottle)}>Add to cart</button>

                <button onClick={() => setLikeCount(likeCount => likeCount+1)} className='like_btn'>Like {likeCount}</button>
            </div>
        </div>
    );
};

export default Bottle;