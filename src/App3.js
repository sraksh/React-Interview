import React, { useState, useCallback } from "react";
import { MyChildComponent } from "./ChildComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const callback = useCallback(() => {}, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <br></br>
      <button onClick={handleClick}>Add</button>
      <br></br>
      <br></br>
      <MyChildComponent callback={callback} />
    </>
  );
}
