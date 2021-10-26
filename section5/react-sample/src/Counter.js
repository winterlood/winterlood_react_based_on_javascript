import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // <- 추가된 라인

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>&nbsp;+&nbsp;</button>
      <button onClick={onDecrease}>&nbsp;-&nbsp;</button>
    </div>
  );
};
export default Counter;
