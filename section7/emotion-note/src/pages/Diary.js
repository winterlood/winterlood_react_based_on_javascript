import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { emotionList } from "../lib/emotion";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Diary = ({ match }) => {
  const [data, setData] = useState();
  const history = useHistory();

  const { id } = match.params;
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => it.id === parseInt(id));
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        history.replace("");
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const date = getStringDate(new Date(data.date));
    const curEmotionData = emotionList.find(
      (it) => it.emotion_id === parseInt(data.emotion)
    );
    return (
      <div className="DiaryPage">
        <Header
          headText={`${date} 기록`}
          leftChild={
            <MyButton
              text={"< 뒤로가기"}
              onClick={() => {
                window.history.back();
              }}
            />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => {
                history.push(`/edit/${id}`);
              }}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img
                alt={`emotion${data.emotion}`}
                src={
                  process.env.PUBLIC_URL + `/assets/emotion${data.emotion}.png`
                }
              />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
