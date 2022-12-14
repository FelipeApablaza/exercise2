import react from 'react';
import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prev) => (prev < 100 ? prev + 1 : prev));
  };

  const decreaseCounter = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const resetCounter = () => setCounter(0);

  const randomCounter = () => {
    const random = Math.floor(Math.random() * (100 - 1));
    setCounter(random);
  };
  return (
    <div className='main'>
      <div className='counter'>{counter}</div>
      <div className='actions'>
        <div onClick={increaseCounter}>+</div>
        <div onClick={decreaseCounter}>-</div>
        <div onClick={resetCounter}>reset</div>
        <div onClick={randomCounter}>random</div>
      </div>
    </div>
  );
};

export default Counter;
