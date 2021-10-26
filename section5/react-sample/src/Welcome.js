import React from "react";

const Welcome = ({ backgroundColor, color, name }) => {
  return (
    <div
      style={{ marginTop: 20, backgroundColor: backgroundColor, color: color }}
    >
      {name}님 반갑습니다
    </div>
  );
};

Welcome.defaultProps = {
  name: "아이고 선생",
};

export default Welcome;
