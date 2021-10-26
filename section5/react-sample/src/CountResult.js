import React from "react";

const CountResult = ({ count }) => {
  return (
    <>
      <h2>{count}</h2>
      <h3>{count % 2 === 0 ? "짝수입니다" : "홀수입니다"}</h3>
    </>
  );
};

export default CountResult;
