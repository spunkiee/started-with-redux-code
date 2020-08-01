export const appReducer = (
  state = {
    loggedIn: false,
    language: "English"
  },
  action
) => {
  switch (action.type) {
    case "APP_LOGIN": {
      return {
        ...state,
        loggedIn: true
      };
    }
    case "APP_LOGOUT": {
      return {
        ...state,
        loggedIn: false
      };
    }
    default: {
      return state;
    }
  }
};
