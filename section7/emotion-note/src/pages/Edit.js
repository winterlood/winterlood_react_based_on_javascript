import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useHistory } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

const Edit = ({ match }) => {
  const history = useHistory();
  const [originData, setOriginData] = useState();

  const diaryList = useContext(DiaryStateContext);
  const { id } = match.params;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => it.id === parseInt(id));
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        history.replace("");
      }
    }
  }, [id, diaryList]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감성 일기장 - ${id}번 일기 수정`;
  }, []);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
