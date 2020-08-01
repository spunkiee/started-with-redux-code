import React, { useState, useEffect } from "react";
import { store } from "../store/index";
import { v4 } from "uuid";

export const Todos = () => {
  const [todos, setTodos] = useState(store.getState());

  // useEffect(() => {
  //   // whenever there is change in state, our local state will get update
  //   const subscribed = store.subscribe(() => {
  //     setTodos(store.getState());
  //   });
  //   return () => {
  //     store.unsubscribe(subscribed);
  //   };
  // }, []);

  store.subscribe(() => {
    setTodos(store.getState());
  });

  return (
    <div>
      <h2>Todos</h2>
      <input
        type="text"
        onKeyDown={e => {
          const value = e.target.value;
          if (e.key === "Enter") {
            e.target.value = "";
            store.dispatch({
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
