import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};


// CREATE SLICE CON REDUX TOOLKIT
createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter() {
      state.showCounter = !state.showCounter;
    },
  },
});

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  //le azioni sono il payload che passiamo quindi acceddiamo alla proprietà amount
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter + -1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "show") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
}

// Il create store vuole passato come parametro una funzione reducer
const store = createStore(counterReducer);

export default store;
