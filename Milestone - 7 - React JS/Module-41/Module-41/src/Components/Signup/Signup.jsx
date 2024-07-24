import { useState } from "react";

const Signup = () => {
    const [number, setNumber] = useState([]);
    const [factorialResult, setFactorialResult] = useState([]);
    const [fibo, setFibo] = useState([]);
    const numbers = [];

    const [mergeSortedArray, setSortedMergeArray] = useState([]);

    const getMergeSortedArray = (array1, array2) => {
        const mergedSortedArray = [];

        const len = array1.length + array2.length;
        let a1 = 0;
        let a2 = 0;
        for (let i = 0; i < len; i++)
        {
            if (array1[a1] < array2[a2] || array2[a2] == undefined) {
                mergedSortedArray.push(array1[a1]);
                a1++;
            }
            else {
                mergedSortedArray.push(array2[a2]);
                a2++;
            }
        }

        setSortedMergeArray(mergedSortedArray);
    }

    const getFibonacciSeries = (n) => {
        let numbers = [0, 1];
        for (let i = 2; i < n; i++) {
            numbers[i] = numbers[i - 1] + numbers[i - 2];
        }
        setFibo(numbers);
    }

    let fact = 1;
    const factorial = n => {
        if (n == 1) {
            return
        }
        fact = fact * n;
        setFactorialResult([fact]);
        factorial(n - 1);
    }

    const recursiveFunction = n => {
        if (n == 0) {
            return;
        }
        numbers.push(n);
        recursiveFunction(n - 1);
    }

    const sentenceReverse = (sentence) => {
        const words = sentence.split(' ');
        let reverseSentence = "";
        for (let i = words.length - 1; i >= 0; i--) {
            let word = words[i];
            if (i === 0) {
                reverseSentence = reverseSentence + word;
            }
            else {
                reverseSentence = reverseSentence + (word + " ");
            }
        }
        return reverseSentence;
    }

    return (
        <div>
            {/* merge sorted array  */}
            <div>
                <ul>
                    {
                        mergeSortedArray.map((num, index) => (<li key={index}>{ num}</li>))
                    }
                </ul>
                <button onClick={() => getMergeSortedArray([1,2,3], [3,5,6,9])}>Show Merge Sorted Array</button>
            </div>

            <div>
                <ul>
                    {
                        fibo.map((num, index) => <li key={index}>{num}</li>)
                    }
                </ul>
                <button onClick={() => (getFibonacciSeries(10))}>Fibonacci number upto 10</button>
            </div>

            <div>
                <p>{factorialResult}</p>
                <button onClick={() => (factorial(5))}>Factorial of 5</button>
            </div>

            <div>
                <ul>
                    {
                        number.map((n, index) => <li key={index}>{n}</li>)
                    }
                </ul>

                <button onClick={() => (
                    recursiveFunction(10),
                    setNumber(numbers)
                )}>Run</button>
            </div>

            <h1>{sentenceReverse("I am a good boy")}</h1>
        </div>
    );
};

export default Signup;