const initialState = {
  loading: false,
  items: [],
  userId: "",
  confirm: null,
  mainPageOpened: true,
  newsFeedOpened: false,
  popUpOpened: false,
  addingNews: false,
  confirming: false,
  searchValue: "",
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

    case "news/add/start":
      return {
        ...state,
        addingNews: true,
      };
    case "news/add/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        addingNews: false,
      };
    case "news/confirmed/start":
      return {
        ...state,
        confirming: true,
      };
    case "news/confirmed/succeed":
      return {
        ...state,
        confirming: false,
        items: [...state.items, action.payload],
      };
    case "news/decline/start":
      return {
        ...state,
        deleting: true,
      };
    case "news/decline/succeed":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        deleting: false,
      };
    case "news/setSearchValue":
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
}

export default news;
