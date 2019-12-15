function membersReducer(state = { data: {  }, inputSearch: "", searchType: "name"}, action) {
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
          case "ADVANCE_FILTER_MEMBERS":
            return {
              ...state,
              searchType: action.value
            };
      default:
        return state;
    }

  }
  
  export default membersReducer;