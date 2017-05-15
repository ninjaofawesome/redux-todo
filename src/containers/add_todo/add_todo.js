import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="todo-list__form">
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="todo-list__form-input" ref={node => {
          input = node
        }} />
        <button className="todo-list__form-submit" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;