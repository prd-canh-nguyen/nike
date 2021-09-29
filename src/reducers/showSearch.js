import * as Types from "../constants/actionTypes";

var initialState = false;

const showSearch = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH:
      state = action.isShow;
      return state;

    default:
      return state;
  }
};

export default showSearch;
