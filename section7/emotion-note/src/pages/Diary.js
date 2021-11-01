import React from "react";

const Diary = ({ location }) => {
  const query = location.search;
  return (
    <div>
      <h1>Diary</h1>
      <h4>query : {query}</h4>
      <p>이곳은 일기 상세 페이지입니다</p>
    </div>
  );
};

export default Diary;
