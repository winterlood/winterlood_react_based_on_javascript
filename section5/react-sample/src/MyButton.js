import React from "react";

const MyButton = () => {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };
  return <button onClick={handleClick}>클릭해주세요</button>;
};

export default MyButton;
