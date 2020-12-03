export function loadNews() {
  return (dispatch) => {
    dispatch({ type: "news/load/start" });
    fetch("http://localhost:3010/news")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "news/load/succeed",
          payload: json,
        });
      });
  };
}
export function startLogIn(login, password) {
  return (dispatch) => {
    dispatch({ type: "users/logIn/start" });
    fetch(`http://localhost:3010/users?login=${login}&password=${password}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "users/logIn/succeed",
          payload: json,
        });console.log(json)
      });
  };
}

export function openNews() {
  return (dispatch) => {
    dispatch({ type: "news/newsTab/open" });
  };
}

export function openMainPage() {
  return (dispatch) => {
    dispatch({ type: "news/mainPageTab/open" });
  };
}

export function openPopUp() {
  return (dispatch) => {
    dispatch({ type: "news/popUp/open" });
  };
}

export function closePopUp() {
  return (dispatch) => {
    dispatch({ type: "news/popUp/close" });
  };
}
