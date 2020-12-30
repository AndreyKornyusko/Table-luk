import React from 'react';
import './TodoList.css';

export default function TodoList({ items, onDeleteTodo, onEditTodo }) {
  return (
    <ul className="todoList">
      {
        items.map(({ id, text }) => (
          <li
            key={id}
            className="todoList-item"
          >
            <div className="todoList-text">{text}</div>
            <button
              onClick={() => onDeleteTodo(id)}
            >Delete</button>
            {/* <button
              onClick={() => onEditTodo(id, text)}
            >Edit</button> */}

          </li>))
      }
    </ul>
  )
}
