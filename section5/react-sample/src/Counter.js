import React, { useState } from "react";
import CountResult from "./CountResult";

const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue); // <- 추가된 라인

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CountResult count={count} />
      <button onClick={onIncrease}>&nbsp;+&nbsp;</button>
      <button onClick={onDecrease}>&nbsp;-&nbsp;</button>
    </div>
  );
};
export default Counter;
