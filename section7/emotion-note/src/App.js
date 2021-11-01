import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import { createContext, useEffect, useReducer, useRef } from "react";

export const DiaryStateContext = createContext(null);
export const DiaryDispatchContext = createContext(null);
const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1636070400000,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1636675200000,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    date: 1637712000000,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    date: 1633046400000,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1634169600000,
  },
];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
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
              ...action.data,
            }
          : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

const App = () => {
  useEffect(() => {
    // localStorage.setItem("item1", "10");
    // localStorage.setItem("item2", 20);
    // localStorage.setItem("item3", JSON.stringify({ value: 30 }));
    const item1 = localStorage.getItem("item1");
    const item2 = localStorage.getItem("item2");
    const item3 = JSON.parse(localStorage.getItem("item3"));

    console.log({ item1, item2, item3 });
  }, []);

  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(6);

  const onCreate = (date, content, emotion) => {
    const nowSavingDate = new Date(date);
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: nowSavingDate.getTime(),
        content,
        emotion,
      },
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
        emotion,
      },
    });
  };

  const dispatches = {
    onCreate,
    onEdit,
    onRemove,
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
