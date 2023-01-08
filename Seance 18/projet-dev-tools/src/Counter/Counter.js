import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incrementer,
  incrementerByAmount,
  decrementer,
  decrementerByAmount,
saveHistoriqueCounter} from './CounterStore'
import  './Counter.css';

export default function Counter() {
  const count = useSelector(state=>state.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [info, setInfo] = useState('');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className='row'>
        <button
          className='button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrementer())}
        >
          -
        </button>
        <span className='value'>{count}</span>
        <button
          className='button'
          aria-label="Increment value"
          onClick={() => dispatch(incrementer())}
        >
          +
        </button>
      </div>
      <div className='row'>
        <label htmlFor='amount'>Amount:</label>
        <input
        id='amount'
          className='button'
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className='button'
          onClick={() => dispatch(incrementerByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className='button'
          onClick={() => dispatch(decrementerByAmount(incrementValue))}
        >
          decrementer amount
        </button>
         </div>
         <div className='row'>
          <label htmlFor='info'> information:</label>
        <input
        id='info'
          className='button'
          aria-label="Set increment amount"
          value={info}
          onChange={(e) =>{setInfo(e.target.value)} }
        />
        <button
          className='button'
          onClick={() => {dispatch(saveHistoriqueCounter(count,info));setInfo('')}}
        >
          enregistrer conteur
        </button>
        </div>
     
    </div>
  );
}
