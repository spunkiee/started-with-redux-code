import React from "react";
import { Todos } from "./components/todos";

export default function App() {
  return (
    <div>
      <Todos />
      <Todos />
    </div>
  );
}

// When you update a todo in one list that same will be updated in the second list also.
// we are using redux so what happens, whenever you upade todo in first todo component
// the same thing is going to updated in the second todos component.
// both are accesing the same redux store
