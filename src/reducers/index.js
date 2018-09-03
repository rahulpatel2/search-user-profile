// action types
const API_CALL_REQUEST = "SEARCH_API_CALL_REQUEST";
const API_CALL_SUCCESS = "SEARCH_API_CALL_SUCCESS";
const API_CALL_FAILURE = "SEARCH_API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  user_details: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, user_details: action.user_details, error: null };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, user_details: null, error: action.error };
    default:
      return state;
  }
}

export default reducer;
