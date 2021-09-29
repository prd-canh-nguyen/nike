import * as Types from "../constants/actionTypes";

var initialState = false;

const showFilter = (state = initialState, action) => {
  switch (action.type) {
    case Types.FILTER:
      state = action.key;
      return state;
    default:
      return state;
  }
};

export default showFilter;
