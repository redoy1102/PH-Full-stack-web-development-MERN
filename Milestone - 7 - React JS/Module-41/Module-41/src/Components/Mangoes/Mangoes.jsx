import { useState } from "react";
import './Mangoes.css'
import Mango from '../Mango/Mango'
import Cart from "../Cart/Cart";

const Mangoes = () => {
    //! states 
    const [showAllMango, setShowAllMango] = useState([]);
    const [weight, setWeight] = useState([]);
    const [sortData, setSortData] = useState([]);
    const [noFormalin, setNoFormalin] = useState([]);
    const [cartMangoes, setCartMangoes] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [isWeight500Available, setIsWeight500Available] = useState(false);
    const [isPriceLowToHigh, setIsPriceLowToHigh] = useState(false);
    const [isShowAllMango, setIsShowAllMango] = useState(false)
    const [isNoFormalinTitle, setIsNoFormalinTitle] = useState(false);
    const [isShowTotalPrice, setIsShowTotalPrice] = useState(false);

    //! dataset 
    const dataMango = [
        { id: 1, category: 'Fojli', weight: 500, price: 200, isFormalin: false },
        { id: 2, category: 'Rupali', weight: 500, price: 220, isFormalin: false },
        { id: 3, category: 'Kathalvog', weight: 600, price: 700, isFormalin: true },
        { id: 4, category: 'Himsagor', weight: 700, price: 650, isFormalin: false },
        { id: 5, category: 'Lengra', weight: 800, price: 600, isFormalin: true }
    ]

    //! Showing all the mangoes
    const handleAllMango = () => {
        clearAllMango();

        setShowAllMango(dataMango);
        setIsShowAllMango(true);
    }

    //! Showing mangoes whose prices > 500
    const weightG500 = () => {
        clearAllMango();

        // All the mangoes is storing in weighG500 array whose price is greater than 500
        const mangoesG500 = []
        dataMango.map(mango => {
            if (mango.weight > 500) {
                mangoesG500.push(mango)
                setWeight(mangoesG500)
            }
        })
        // console.log(mangoesG500);
        setIsWeight500Available(true)
    }

    //! Ascending sort
    const sortComparison = (first, second) => {
        return first.price - second.price;
    }
    const ascendingSort = () => {
        clearAllMango();

        dataMango.sort(sortComparison);
        setSortData(dataMango);
        setIsPriceLowToHigh(true);
    }

    const handleNoFormalin = () => {
        clearAllMango();

        const noFormalin = [];
        dataMango.map(mango => {
            if (mango.isFormalin === false) {
                noFormalin.push(mango);
            }
        })

        setNoFormalin(noFormalin);
        setIsNoFormalinTitle(true);
    }

    const clearAllMango = () => {
        setShowAllMango([]);
        setWeight([]);
        setSortData([]);
        setNoFormalin([]);

        setIsWeight500Available(false);
        setIsPriceLowToHigh(false);
        setIsShowAllMango(false);
        setIsNoFormalinTitle(false);
    }

    //! cart buttons
    const handleTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    }
    const handleAddProductToCart = (mango) => { setCartMangoes([...cartMangoes, mango]), setIsShowTotalPrice(true) }

    const handleRemoveProductFromCart = (productId) => {
        // console.log(productId);
        let cartElements = [...cartMangoes];
        console.log(cartElements);
        cartElements.map((object, index) => {
            console.log(index)
            if (object.id === productId) {
                console.log(object.id)
                console.log(productId)
                cartElements.splice(index, index);
                setCartMangoes(cartElements);
                console.log(cartElements);
                // return;
            }
        })
        // cartElements.pop();
    }

    return (
        <div className="parent_div">

            {/* All the buttons */}
            <div className="btn_div">
                <button onClick={() => handleAllMango()}>Home</button> <br /> <br />

                <button onClick={() => weightG500()}>{"Weight > 500"}</button>  <br /><br />

                <button onClick={() => ascendingSort()}>Price low to high</button><br /><br />

                <button onClick={() => handleNoFormalin()}>No Formalin</button><br /><br />

                {/* <button onClick={() => clearAllMango()}>Clear</button> */}
            </div>


            {/* Output or mangoes */}
            <div className="mangoes_container">
                <h1 className="center">{isShowAllMango ? 'All Mangoes' : ''}</h1>
                <div className="mangoes">
                    {
                        showAllMango.map((mango) => <Mango key={mango.id} mango={mango} handleAddProductToCart={handleAddProductToCart} handleTotalPrice={handleTotalPrice}></Mango>)
                    }
                </div>

                <h1 className="center"> {isWeight500Available ? 'Weight > 500' : ''} </h1>
                <div className="mangoes">
                    {
                        weight.map((mango) => <Mango key={mango.id} mango={mango} handleAddProductToCart={handleAddProductToCart} handleTotalPrice={handleTotalPrice}></Mango>)
                    }
                </div>

                <h1 className="center"> {isPriceLowToHigh ? 'Price low to high' : ''} </h1>
                <div className="mangoes">
                    {
                        sortData.map((mango) => <Mango key={mango.id} mango={mango} handleAddProductToCart={handleAddProductToCart} handleTotalPrice={handleTotalPrice}></Mango>)
                    }
                </div>

                <h1 className="center"> {isNoFormalinTitle ? 'No Formalin' : ''} </h1>
                <div className="mangoes">
                    {
                        noFormalin.map((mango) => <Mango key={mango.id} mango={mango} handleAddProductToCart={handleAddProductToCart} handleTotalPrice={handleTotalPrice}></Mango>)
                    }
                </div>
            </div>

            {/* cart */}

            <div className="cart_container">
                <h1 className="center">Cart</h1>
                {/* isShowTotalPrice */}
                <h3 className="center">{isShowTotalPrice ? `Total Price: ${totalPrice}` : ''}</h3>
                <div className="cart_mangoes">
                    {
                        cartMangoes.map((mango) => (
                            <Cart key={mango.id} mango={mango} handleRemoveProductFromCart={handleRemoveProductFromCart}></Cart>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Mangoes;