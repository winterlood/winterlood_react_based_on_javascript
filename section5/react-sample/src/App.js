import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: 20, textAlign: "center" }}>
      {/* 표시 영역 */}
      <div>
        <h2>{count}</h2>
        <h4>{count % 2 === 0 ? "짝수" : "홀수"}</h4>
      </div>

      {/* 컨트롤 영역 */}
      <div>
        <button onClick={() => setCount(count - 1)}> minus </button>
        <button onClick={() => setCount(count + 1)}> plus </button>
      </div>
    </div>
  );
};

export default App;
