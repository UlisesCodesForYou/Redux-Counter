import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-Slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // .increment() is an ACTION METHOD that was created by using counterSlice.actions;
  };

  const increaseBy5 = () => {
    dispatch(counterActions.increase(5));
  };

  const decreaseBy5 = () => {
    dispatch(counterActions.decrease(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment (+)</button>
        <button onClick={decrementHandler}>Decrement (-)</button>
        <button onClick={increaseBy5}>Increase by 5!</button>
        <button onClick={decreaseBy5}>Decrease by 5!</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
