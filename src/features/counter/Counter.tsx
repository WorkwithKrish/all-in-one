import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-wrapper">
      <h1>Counter: ${counter}</h1>
      <div className="button-Wrapper">
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCounter(0)}>
          Restart
        </button>
      </div>
    </div>
  );
};
export default Counter;
