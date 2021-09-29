import * as Types from "../constants/actionTypes";

var initialState = true;

const showForm = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_FORM:
      state = action.isOpen;
      return state;
    default:
      return state;
  }
};

export default showForm;
