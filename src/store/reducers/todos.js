export const todosreducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        {
          id: action.id,
          text: action.text,
          status: action.state || "ACTIVE"
        },
        ...state
      ];
    }
    case "DEL_TODO": {
      return state.filter(todo => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
