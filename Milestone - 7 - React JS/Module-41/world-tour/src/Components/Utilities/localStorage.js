const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) return JSON.parse(storedCartString)
    else return []
}

const saveCartToLS = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);

    // saving to LS
    saveCartToLS(cart)
}

const removeFromLS = (id) => {
    const cartIds = getStoredCart();
    const remaining = cartIds.filter(cartId => cartId !== id)

    // saving to LS
    saveCartToLS(remaining)
}

export {addToLS, getStoredCart, removeFromLS}