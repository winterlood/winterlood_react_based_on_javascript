import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import { createContext, useEffect, useReducer, useRef } from "react";

export const DiaryStateContext = createContext(null);
export const DiaryDispatchContext = createContext(null);

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id
          ? {
              ...action.data
            }
          : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));

  return newState;
};

const App = () => {
  // localStorage.setItem("diary", JSON.stringify(dummyData));
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort((a, b) => b.id - a.id);
      dataId.current = diaryList[0].id + 1;

      dispatch({ type: "INIT", data: diaryList });
    } else {
      dispatch({ type: "INIT", data: [] });
    }
  }, []);

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    const nowSavingDate = new Date(date);
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: nowSavingDate.getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    const nowSavingDate = new Date(date);
    nowSavingDate.setHours(12, 0, 0);

    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: nowSavingDate.getTime(),
        content,
        emotion
      }
    });
  };

  const dispatches = {
    onCreate,
    onEdit,
    onRemove
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={dispatches}>
        <div className="App">
          <AppRouter />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/diary/:id" component={Diary} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
