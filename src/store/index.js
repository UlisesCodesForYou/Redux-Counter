import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
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

export default store 