import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
    </div>
  );
};

// const App = () => {
//   const [diaryList, setDiaryList] = useState([]);

//   const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//       (res) => res.json()
//     );

//     setDiaryList(
//       res.slice(0, 20).map((it) => {
//         const created_date = new Date().getTime();
//         return {
//           author: "test",
//           content: it.body,
//           emotion: Math.floor(Math.random(0, 10) * 10),
//           created_date: created_date,
//         };
//       })
//     );
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleAddDiary = (author, content, emotion) => {
//     const created_date = new Date().getTime();
//     const newDiary = { author, content, emotion, created_date: created_date };
//     setDiaryList([newDiary, ...diaryList]);
//   };

//   const handleRemoveDiary = (diaryIndex) => {
//     setDiaryList(diaryList.filter((_, idx) => idx !== diaryIndex));
//   };

//   const handleEditDiary = (diaryIndex, content) => {
//     setDiaryList(
//       diaryList.map((it, idx) =>
//         idx === diaryIndex ? { ...it, content: content } : it
//       )
//     );
//   };

//   return (
//     <div className="App">
//       <DiaryEditor handleAddDiary={handleAddDiary} />
//       <DiaryList
//         diaryList={diaryList}
//         handleRemoveDiary={handleRemoveDiary}
//         handleEditDiary={handleEditDiary}
//       />
//     </div>
//   );
// };

export default App;
