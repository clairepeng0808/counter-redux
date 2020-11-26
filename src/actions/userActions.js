import { LOAD_USER, LOGOUT } from "../constants";

export const loadUser = (userObj) => {
  return {
    type: LOAD_USER,
    payload: userObj,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
