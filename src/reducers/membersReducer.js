function membersReducer(state = { data: {  }, inputSearch: "" }, action) {
    switch (action.type) {
      case "FETCH_MEMBERS":
        return {
          ...state,
          data: action.data
        };
        case "FILTER_MEMBERS":
          return {
            ...state,
            inputSearch: action.value
          };
      default:
        return state;
    }

  }
  
  export default membersReducer;