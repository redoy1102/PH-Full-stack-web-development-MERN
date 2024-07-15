// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import Counter from './counter';
import Client1 from './assets/client1';
import ApiPractice from './apiPractice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ApiPractice></ApiPractice>
      <Client1></Client1>
      <Counter></Counter>
      <p>{count}</p>
      <button onClick={() => {setCount(count + 1)}}>Click</button>
    </>
  )
}

export default App
