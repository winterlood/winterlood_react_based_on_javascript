import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./styles.css";

export const DiaryContext = React.createContext(null);

const App = () => {
  const [diaryList, setDiaryList] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );

    setDiaryList(
      res.map((it) => {
        return {
          author: "test",
          content: it.body,
          emotion: Math.floor(Math.random(0, 10) * 10),
          created_date: new Date().getTime(),
        };
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddDiray = (author, content, emotion) => {
    const newDirayList = diaryList.slice();
    const created_date = new Date().getTime();
    newDirayList.unshift({ author, content, emotion, created_date });
    setDiaryList(newDirayList);
  };

  const handleRemoveDiray = (diaryIndex) => {
    setDiaryList(diaryList.filter((it, idx) => idx !== diaryIndex));
  };

  const handleEditDiary = (diaryIndex, content) => {
    let newDirayList = diaryList.slice();
    newDirayList[diaryIndex] = {
      ...newDirayList[diaryIndex],
      content: content,
    };
    setDiaryList(newDirayList);
  };

  const store = {
    diaryList,
    handleAddDiray,
    handleRemoveDiray,
    handleEditDiary,
  };

  return (
    <DiaryContext.Provider value={store}>
      <div className="App">
        <DiaryEditor />
        <DiaryList />
      </div>
    </DiaryContext.Provider>
  );
};

export default App;
