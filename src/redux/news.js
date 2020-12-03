const initialState = {
  loading: false,
  items: [],
  userId: "",
  confirm: null,
  mainPageOpened: true,
  newsFeedOpened: false,
  popUpOpened: false,
};

function news(state = initialState, action) {
  switch (action.type) {
    case "news/load/start":
      return {
        ...state,
        loading: true,
        mainPageOpened: true,
      };
    case "news/load/succeed":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "news/newsTab/open":
      return {
        ...state,
        mainPageOpened: false,
        newsFeedOpened: true,
      };
    case "news/mainPageTab/open":
      return {
        ...state,
        mainPageOpened: true,
        newsFeedOpened: false,
      };
    case "news/popUp/open":
      return {
        ...state,
        popUpOpened: true,
      };
    case "news/popUp/close":
      return {
        ...state,
        popUpOpened: false,
      };
    default:
      return state;
  }
}

export default news;
