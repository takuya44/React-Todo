import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  //console.log(todoText);
  const [incomopleteTodos, setIncomopleteTodos] = useState([
    "あああ",
    "いいい"
  ]);
  const [comopleteTodos, serComoleteTodos] = useState(["ううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomopleteTodos, todoText];
    setIncomopleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomoplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomopleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comoplete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {comopleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
