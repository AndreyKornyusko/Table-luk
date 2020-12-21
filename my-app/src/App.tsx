import React, { useEffect, useReducer } from 'react';
import shortid from 'shortid';
import './App.css';
import TodoEditor from '../src/Componets/TodoEditor/TodoEditor';
import TodoList from '../src/Componets/TodoList/TodoList';

function App() {

  const ActionType = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    FETCH_TODOS: 'FETCH_TODOS',

  }

  const todosReducer = (state, { type, payload }) => {
    switch (type) {
      case ActionType.ADD_TODO:
        return [...state, payload.todo];

      case ActionType.DELETE_TODO:
        return state.filter(todo => todo.id !== payload.id);

      case ActionType.FETCH_TODOS:
        return payload.todos;

      default:
        return state;
    }
  }

  const [todos, dispatch] = useReducer(todosReducer, [])

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text
    }

    dispatch({
      type: ActionType.ADD_TODO,
      payload: { todo }
    })
  }

  const deleteTodo = id => {
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: { id }
    })
  }

  useEffect(() => {
    const persistedTodos = localStorage.getItem('todos');
    if (persistedTodos) {
      const todos = JSON.parse(persistedTodos);
      dispatch({
        type: ActionType.FETCH_TODOS,
        payload: { todos }
      })
    }
  }, [])

  return (
    <div className="App">
      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList items={todos} onDeleteTodo={deleteTodo} />}
    </div>
  );
}

export default App;
