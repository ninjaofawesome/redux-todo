import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick} className={completed ? 'todo-list__item--completed' : 'todo-list__item'} >
      {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;