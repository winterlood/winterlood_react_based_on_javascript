import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

const DirayItem = ({
  author,
  content,
  emotion,
  created_date,
  handleRemoveDiary,
  handleEditDiary,
}) => {
  const [isEditNow, setIsEditNow] = useState(false);
  const toggleIsEdit = () => setIsEditNow(!isEditNow);

  const [localContent, setLocalContent] = useState(content);
  const localContentRef = useRef();

  const handleSubmitEditDiary = () => {
    handleEditDiary(localContent);
    toggleIsEdit();
  };

  useEffect(() => {
    console.log("RENDER");
  });

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
          <button onClick={handleRemoveDiary}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

const DiaryList = ({ diaryList, handleRemoveDiary, handleEditDiary }) => {
  return (
    <div className="DiaryList_container">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it, idx) => (
          <DirayItem
            key={`dirayitem:${nanoid()}`}
            {...it}
            handleRemoveDiary={() => {
              handleRemoveDiary(idx);
            }}
            handleEditDiary={(content) => {
              handleEditDiary(idx, content);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
