import React, { useState, useRef, useContext, useEffect } from "react";
import { DiaryContext } from "./App";

const DirayItem = ({ author, content, emotion, created_date, idx }) => {
  const { handleRemoveDiray, handleEditDiary } = useContext(DiaryContext);

  const [isEditNow, setIsEditNow] = useState(false);
  const toggleIsEdit = () => setIsEditNow(!isEditNow);

  const [localContent, setLocalContent] = useState("");
  const localContentRef = useRef();

  const handleSubmitEditDiary = () => {
    handleEditDiary(idx, localContent);
    toggleIsEdit();
  };

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  return (
    <div className="DiaryItem_container">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEditNow ? (
          <>
            <textarea
              ref={localContentRef}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEditNow ? (
        <>
          <button onClick={toggleIsEdit}>수정 취소하기</button>
          <button onClick={handleSubmitEditDiary}>저장하기</button>
        </>
      ) : (
        <>
          <button onClick={() => handleRemoveDiray(idx)}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

const DiaryList = () => {
  const { diaryList } = useContext(DiaryContext);

  return (
    <div className="DiaryList_container">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it, idx) => (
          <DirayItem key={`dirayitem:${idx}`} {...it} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
