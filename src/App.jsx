import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodos } from "./compornents/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  //console.log(todoText);
  const [incomopleteTodos, setIncomopleteTodos] = useState([]);

  const [comopleteTodos, serComoleteTodos] = useState([]);

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
    //spliceで削除 対象箇所１行だけ削除する。
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
    //spliceで削除 対象箇所１行だけ削除する。
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incomopleteTodos, comopleteTodos[index]];

    //完了Todoから削除
    serComoleteTodos(newCompleteTodos);
    //未完了Todoへ追加
    setIncomopleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos />

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
