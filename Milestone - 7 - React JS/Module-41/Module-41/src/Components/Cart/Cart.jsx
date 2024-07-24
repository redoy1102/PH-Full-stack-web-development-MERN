// import { useState } from 'react';
import '../Mangoes/Mangoes.css'
import './Cart.css'

// eslint-disable-next-line react/prop-types
const Cart = ({ index, mango, handleRemoveProductFromCart, }) => {
    // eslint-disable-next-line react/prop-types
    const {id, category, weight, isFormalin, price } = mango;

    return (
        <div>
            <div className='product_div'>
                <h3 key={index}>Name: {category}</h3>
                <p key={index}>Weight: {weight}</p>
                <p key={index}>Price: {price}</p>
                <p key={index}>Formalin: {isFormalin ? 'Used formalin' : 'Not used formalin.'}</p>
                <button key={index} className='btn remove_btn_from_cart' onClick={() => (handleRemoveProductFromCart(id))} >Remove</button>
            </div>
        </div>
    );
};

export default Cart;