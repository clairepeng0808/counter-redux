import { INCREMENT, DECREMENT } from "../constants";

const initialCount = 1;

const counter = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default counter;
