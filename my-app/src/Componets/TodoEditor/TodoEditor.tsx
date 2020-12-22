import React, { useState } from 'react';
import './TodoEditor.css';


export default function TodoEditor({ onSave }) {
  const [todoText, setTodoText] = useState('')

  const submitHandler = e => {
    e.preventDefault();
    onSave(todoText);
    setTodoText('')
  }

  const onChangeTodoText = e => {
    setTodoText(e.target.value)
  }

  return (
    <div className="todoEditor-wrap">
      <form onSubmit={submitHandler} >
        <input type="text" value={todoText} onChange={onChangeTodoText} />
        <button type="submit">Save</button>
      </form>

    </div>
  )
}
