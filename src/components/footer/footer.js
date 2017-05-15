import React from 'react';
import FilterLink from '../../containers/filter_link/filter_link';

const Footer = () => (
  <div className="todo-list__footer">
    <p className="todo-list__linked-list-label">
      Sort by:
    </p>
    <ul className="todo-list__linked-list">
      <li className="todo-list__linked-item">
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
      </li>
      <li className="todo-list__linked-item">
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </li>
      <li className="todo-list__linked-item">
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </li>
    </ul>
  </div>
)

export default Footer;