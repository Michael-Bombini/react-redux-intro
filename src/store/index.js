import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

//questi dati saranno estratti dal selector
const initialCounterState = {
  counter: 0,
  showCounter: true,
};

// CREATE SLICE CON REDUX TOOLKIT
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// function counterReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   //le azioni sono il payload che passiamo quindi acceddiamo alla proprietà amount
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter + -1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "show") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// }

// Il create store vuole passato come parametro una funzione reducer
// const store = createStore(counterReducer);

// store con redux toolkit

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
