import { LOAD_USER, LOGOUT } from "../constants";

const initialloginUserState = {
  user: {},
  loggedIn: false,
};

const loginUser = (state = initialloginUserState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginUser;
