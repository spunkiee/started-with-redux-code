import React from "react";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  // This is the way we used in production
  // state.todos because we are combinig to reducers in reducers/index.js
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      <input
        type="text"
        onKeyDown={e => {
          const value = e.target.value;
          if (e.key === "Enter") {
            e.target.value = "";
            dispatch({
              type: "ADD_TODO",
              text: value,
              id: v4()
            });
          }
        }}
      />
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};
