import {createSlice} from '@reduxjs/toolkit'

// #### START OF COUNTER SLICE #####
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // These are methods
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// #### END OF COUNTER SLICE #######

export const counterActions = counterSlice.actions; // This will make all 'reducers' (increment, decrement) in to action methods.
export default counterSlice.reducer; 