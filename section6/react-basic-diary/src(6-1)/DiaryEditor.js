import React, { useRef, useState } from "react";

const DiaryEditor = () => {
  const [diary, setDiary] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeDiary = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="DiaryEditor_container">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          placeholder="작성자"
          type="text"
          value={diary.author}
          onChange={handleChangeDiary}
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="일기"
          type="text"
          value={diary.content}
          onChange={handleChangeDiary}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={diary.emotion}
          onChange={handleChangeDiary}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
  );
};

export default DiaryEditor;
