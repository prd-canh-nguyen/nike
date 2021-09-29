import * as Types from "../constants/actionTypes";

var initialState = {
  isSuccess: false,
  name: "",
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTHENTICATION:
      state = action.authen;
      return { ...state };

    default:
      return { ...state };
  }
};

export default authentication;
