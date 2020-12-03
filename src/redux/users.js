const initialState = {
  login: "",
  password: "",
  isAdmin: null,
};

function users(state = initialState, action) {
  switch (action.type) {
    case "users/logIn/start":
      return {
        ...state,
        authorization: true,
      };
    case "users/logIn/succeed":
      return action.payload[0];
    default:
      return state;
  }
}

export default users;
