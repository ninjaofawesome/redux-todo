import React, { PropTypes } from 'react';
import Todo from '../todo/todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => {
      return ( <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      /> );
    })}

  </ul>
)

TodoList.proptypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;