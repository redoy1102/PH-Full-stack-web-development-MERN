import React, { useEffect, useState } from 'react';
import './Bottles.css'
import '../Utilities/utilities.css'
import Bottle from '../Bottle/Bottle'
import { addToLS, getStoredCart, removeFromLS } from '../Utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    //! fetching data from API
    useEffect(() => {
        fetch('../../../public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    //! Load cart from local storage
    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();
            const cartProduct = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => id === bottle.id)
                // console.log(bottle);
                if (bottle) {
                    cartProduct.push(bottle);
                }
            }
            setCart(cartProduct);
        }
    } ,[bottles])

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        const remainingBottleInCart = cart.filter(bottle => bottle.id !== id)

        setCart(remainingBottleInCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h1>Cart: {cart.length}</h1>
            <div className='cart_bottles_container'>
                {
                    cart.map(bottle => <Cart bottle={bottle} key={bottle.id} handleRemoveFromCart={handleRemoveFromCart}></Cart>)
                }
            </div>
            <div className='bottles_container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    >
                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;