const localData = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  ...localData,

  authorizing: false,
  error: null,
};

function users(state = initialState, action) {
  switch (action.type) {
    case "users/logIn/start":
      return {
        ...state,
        authorizing: true,
        error: false,
      };
    case "users/logIn/succeed":
      return {
        ...state,
        ...action.payload[0],
        authorizing: false,
      };

    case "users/logIn/failed":
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    case "users/deleteLogPass":
      return {
        ...state,
        login: undefined,
        password: undefined,
        isAdmin: false,
        id: undefined,
        error: false,
      };

    default:
      return state;
  }
}

export default users;
