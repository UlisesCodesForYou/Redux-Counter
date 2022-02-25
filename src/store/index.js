import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState , action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }

  if (action.type === "DECREASE") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'TOGGLE') {
    return {
      showCounter: !state.showCounter, 
      counter: state.counter
    }
  }

  return state; // This will return the default state value if neither action type is matched.
};

const store = createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();
// };

// store.subscriber(counterSubscriber);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });

export default store;
