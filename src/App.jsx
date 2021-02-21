import React, { useState, useCallback } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodos } from "./compornents/IncompleteTodos";
import { CompleteTodos } from "./compornents/CompleteTodos";

// const todos = [{
//   id: 1,
//   text: 'todo text1',
//   completed: false,
// },{
//   id: 2,
//   text: 'todo text2',
//   completed: true,
// },{
//   id: 3,
//   text: 'todo text1',
//   completed: false,
// }]

export const App = () => {
  const [todoText, setTodoText] = useState("");
  //console.log(todoText);
  const [incomopleteTodos, setIncomopleteTodos] = useState([]);

  const [comopleteTodos, serComoleteTodos] = useState([]);

  const handleChangeTodoText = (event) => setTodoText(event.target.value);

  const isMaxIncompleteTodos = incomopleteTodos.length >= 5;

  //追加ボタン
  const handleClickAdd = useCallback(() => {
    if (todoText === "") return;
    setIncomopleteTodos((prevIncomopleteTodos) => [
      ...prevIncomopleteTodos,
      todoText,
    ]);
    setTodoText("");
  }, [todoText]);

  //削除ボタン
  const handleClickDelete = useCallback((deleteIndex) => {
    setIncomopleteTodos((prevIncomopleteTodos) =>
      prevIncomopleteTodos.filter(
        (_todo, todoIndex) => todoIndex !== deleteIndex
      )
    );
  }, []);

  //完了ボタン
  const handleClickComplete = useCallback(
    (index) => {
      const newIncompleteTodos = [...incomopleteTodos];
      //spliceで削除 対象箇所１行だけ削除する。
      newIncompleteTodos.splice(index, 1);

      const newcomopleteTodos = [...comopleteTodos, incomopleteTodos[index]];
      //未完了Todoから削除
      setIncomopleteTodos(newIncompleteTodos);
      //完了Todoへ追加
      serComoleteTodos(newcomopleteTodos);
    },
    [newIncompleteTodos, newcomopleteTodos]
  );

  //戻すボタン
  const handleClickBack = useCallback((index) => {
    //完了Todoから削除
    serComoleteTodos((prevComopleteTodos) =>
      prevComopleteTodos.filter((_todo, todoIndex) => todoIndex !== index)
    );
    //未完了Todoへ追加
    setIncomopleteTodos((prevIncompletedTodos) => [
      ...prevIncompletedTodos,
      comopleteTodos[index],
    ]);
  }, []);

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeInput={handleChangeTodoText}
        onClick={handleClickAdd}
        disabled={isMaxIncompleteTodos}
      />
      {isMaxIncompleteTodos && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までだぞー。早くやりなや
        </p>
      )}
      <IncompleteTodos
        todos={incomopleteTodos}
        onClickComplete={handleClickComplete}
        onClickDelete={handleClickDelete}
      />
      <CompleteTodos todos={comopleteTodos} onClickBack={handleClickBack} />
    </>
  );
};
