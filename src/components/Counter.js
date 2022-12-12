//importiamo useSelector hook di redux per collegarci con lo store
//importiamo useDispatch per attivare le azioni che andranno a modificare il nostro state dello store
import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //assegnamo lo state al counter che aggiornerà ogni volta che lo state dello store cambia 
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  //assegnamo alla variabile dispatch l'hook
  const dispatch = useDispatch();
  

  //il nome dell'azione che vogliamo attivare
  function incrementHandler(){
    dispatch({type: 'increment'})
  }
  function decrementHandler(){
    dispatch({type: 'decrement'})
  }

  //passiamo come payload nell'action amount per il dispatch
  function increaseHandler(){
    dispatch({type: 'increase' , amount: 5})
  }

  function showCounterHandler(){
    dispatch({type: 'show'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={showCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
