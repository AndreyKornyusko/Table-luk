import React from 'react'

export default function TodoList({ items, onDeleteTodo }) {
  return (
    <ul>
      {
        items.map(({ id, text }) => (
          <li
            key={id}
          >
            <span>{text}</span>
            <button
              onClick={() => onDeleteTodo(id)}
            >Delete</button>
          </li>))
      }
    </ul>
  )
}
