export function loadNews() {
  return (dispatch) => {
    dispatch({ type: "news/load/start" });
    fetch("/news")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "news/load/succeed",
          payload: json,
        });
      });
  };
}

export function openNews() {
  return (dispatch) => {
    dispatch({ type: "news/newsTab/open" });
  };
}
export function startLogIn(login, password) {
  return (dispatch) => {
    dispatch({ type: "users/logIn/start" });

    fetch(`/users?login=${login}&password=${password}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length) {
          dispatch({
            type: "users/logIn/succeed",
            payload: json,
          });
          localStorage.setItem("auth", JSON.stringify(json[0]));
        } else {
          dispatch({
            type: "users/logIn/failed",
          });
        }
      });
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

export function offerNews(title, content, userId) {
  return (dispatch) => {
    dispatch({ type: "news/add/start" });
    fetch("/news", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        date: "11/11/11",
        userId: userId,
        confirmed: false,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "news/add/succeed",
          payload: json,
        });
      });
  };
}

export function acceptNews(id) {
  return (dispatch) => {
    dispatch({ type: "news/confirmed/start" });
    fetch(`/news/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        confirmed: true,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "news/confirmed/succeed",
          payload: json,
        });
      });
  };
}
export function declineNews(id) {
  return (dispatch) => {
    dispatch({ type: "news/decline/start" });
    fetch(`/news/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "news/decline/succeed",
          payload: id,
        });
      });
  };
}

export function setSearchValue(value) {
  return (dispatch) => {
    dispatch({
      type: "news/setSearchValue",
      payload: value,
    });
  };
}

export function deleteLogPass() {
  return (dispatch) => {
    dispatch({
      type: "users/deleteLogPass",
      payload: undefined,
    });
  };
}
