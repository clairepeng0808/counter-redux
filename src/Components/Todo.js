import React, { PropTypes } from "react";

const Todo = ({ text }) => {
  <li>{text}</li>;
};

Todo.prototype = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
