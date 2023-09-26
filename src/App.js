import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  const timerId = useRef(null);

  const onStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const onStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <div>Renders: {renderCounter.current}</div>

      <p>{count}</p>
      <div>
        <button onClick={onStart}> Start </button>
      </div>
      <br></br>
      <button onClick={onStop}> Pause </button>
    </div>
  );
}
