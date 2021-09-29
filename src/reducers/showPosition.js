import * as Types from "../constants/actionTypes";

var initialState = 0;

const showPosition = (state = initialState, action) => {
  switch (action.type) {
    case Types.SCROLL:
      state = action.position;
      return state;

    default:
      return state;
  }
};

export default showPosition;
