const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [
          ...state.myList,
          ...(state.myList.map(i => i.id).indexOf(action.payload.id) === -1
            ? [action.payload]
            : [])
        ]
      };

    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      };
    default:
      return state;

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          []
      };
  }
};

export default reducer;
