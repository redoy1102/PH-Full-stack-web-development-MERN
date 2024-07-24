import { useState } from "react";

const Batches = () => {
    const [number, setNumber] = useState([]);
    // console.log(number);
    const [emptyStatus, setEmptyStatus] = useState(false);
    const [evenButton, setEvenButton] = useState(true);

    const batches = [
        { title: "C Programming Private Batch", price: 1530, seat: 20, startDate: "20 August 2024" },
        [1, 2, 3, 9, 7, 4, 5, 2, 699, 654, 2365, 147, 256, 325, 874, 56974, 1254, 3, 6, 8, 4, 258, 9, 3, 6, 4,],
    ]

    return (
        <div>
            <h1>Batches</h1>
            <ul>
                {
                    emptyStatus ? number.map((num, index) => num % 2 == 0 ? <li key={index}> {num}</li> : '') : [[]]
                }
            </ul>

            <button onClick={() => (
                setNumber(batches[1]),
                setEvenButton(!evenButton),
                setEmptyStatus(!emptyStatus)
            )}>
                {evenButton ? 'See the even numbers' : 'Close the even numbers'}
            </button>
        </div>
    );
};

export default Batches;