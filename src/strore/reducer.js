const initailState = [];
const reducer = (state = initailState, action) => {
  debugger;
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          count: 1,
        },
      ];
      default:
        return state
  }
};

export default reducer;
