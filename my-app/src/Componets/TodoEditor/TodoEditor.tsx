import React, { useState } from 'react'

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
    <form onSubmit={submitHandler}>
      <input type="text" value={todoText} onChange={onChangeTodoText} />
      <button type="submit">Save</button>
    </form>
  )
}
