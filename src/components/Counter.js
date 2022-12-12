//importiamo useSelector hook di redux per collegarci con lo store
//importiamo useDispatch per attivare le azioni che andranno a modificare il nostro state dello store
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  //assegnamo lo state al counter che aggiornerà ogni volta che lo state dello store cambia 
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  //assegnamo alla variabile dispatch l'hook
  const dispatch = useDispatch();
  

  //il nome dell'azione che vogliamo attivare
  function incrementHandler(){
    dispatch(counterActions.increment());
  }
  function decrementHandler(){
    dispatch(counterActions.decrement());
  }

  //passiamo come payload nell'action amount per il dispatch
  function increaseHandler(){
    dispatch(counterActions.increase(5))
  }

  function showCounterHandler(){
    dispatch(counterActions.toggleCounter())
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
