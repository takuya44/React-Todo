import React from "react";

export const CompleteTodos = (props) => {
  const { todoss, onClickBack } = props;
  return (
    //返す内容
    <div className="comoplete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todoss.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
