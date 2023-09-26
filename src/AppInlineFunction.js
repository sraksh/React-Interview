import React, { useState, useCallback } from "react";
import { MyChildComponent } from "./ChildComponent";

// Standalone function for incrementing
function incrementCount(currentCount, setCount) {
  setCount(currentCount + 1);
}

const CounterStandalone = () => {
  const [count, setCount] = useState(0);
  const callback = useCallback(() => {}, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => incrementCount(count, setCount)}>Increment</button>
      <MyChildComponent callback={callback} />
    </div>
  );
};

export default CounterStandalone;
