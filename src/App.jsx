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

  //追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomopleteTodos, todoText];
    setIncomopleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incomopleteTodos];
    //console.log(newTodos);
    newTodos.splice(index, 1);
    setIncomopleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incomopleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newcomopleteTodos = [...comopleteTodos, incomopleteTodos[index]];
    //未完了Todoから削除
    setIncomopleteTodos(newIncompleteTodos);
    //完了Todoへ追加
    serComoleteTodos(newcomopleteTodos);
  };

  //戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...comopleteTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incomopleteTodos, comopleteTodos[index]];

    //完了Todoから削除
    serComoleteTodos(newCompleteTodos);
    //未完了Todoへ追加
    setIncomopleteTodos(newIncompleteTodos);
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
          {incomopleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comoplete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {comopleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
