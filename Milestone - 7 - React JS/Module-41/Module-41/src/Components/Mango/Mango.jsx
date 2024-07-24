// import { useState } from 'react';
import '../Mangoes/Mangoes.css'
import './Mango.css'

// eslint-disable-next-line react/prop-types
const Mango = ({ mango, handleAddProductToCart, handleTotalPrice}) => {
    // eslint-disable-next-line react/prop-types
    const {category, weight, price, isFormalin } = mango;

    return (
        <div>
            <div className='product_div'>
                <h3>Name: {category}</h3>
                <p>Weight: {weight}</p>
                <p>Price: {price}</p>
                <p>Formalin: {isFormalin ? 'Used formalin' : 'Not used formalin.'}</p>
                <button className='btn' onClick={() => (handleAddProductToCart(mango), handleTotalPrice(price))} >Add to cart</button>
            </div>
        </div>
    );
};

export default Mango;