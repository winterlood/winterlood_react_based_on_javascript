import React, { useRef, useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  return (
    <div className="DiaryEditor_container">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="작성자"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
    </div>
  );
};

// const DiaryEditor = ({ handleAddDiary }) => {
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [emotion, setEmotion] = useState(1);

//   const authorRef = useRef(null);
//   const contentRef = useRef(null);

//   const handleAddButtonClick = () => {
//     if (author.length < 2) {
//       authorRef.current.focus();
//       return;
//     }

//     if (content.length < 5) {
//       contentRef.current.focus();
//       return;
//     }
//     handleAddDiary(author, content, emotion);

//     setAuthor("");
//     setContent("");
//     setEmotion(1);
//   };

//   return (
//     <div className="DiaryEditor_container">
//       <h2>오늘의 일기</h2>
//       <div>
//         <input
//           ref={authorRef}
//           placeholder="작성자"
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//       </div>
//       <div>
//         <textarea
//           ref={contentRef}
//           placeholder="일기"
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </div>
//       <div>
//         <span>오늘의 감정점수 : </span>
//         <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//           <option value={4}>4</option>
//           <option value={5}>5</option>
//         </select>
//       </div>
//       <div>
//         <button onClick={handleAddButtonClick}>일기 저장하기</button>
//       </div>
//     </div>
//   );
// };

export default DiaryEditor;
