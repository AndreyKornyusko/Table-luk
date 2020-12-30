import React, { useEffect, useReducer } from 'react';
import shortid from 'shortid';
import './App.css';
import TodoEditor from '../src/Componets/TodoEditor/TodoEditor';
import TodoList from '../src/Componets/TodoList/TodoList';
import AuthManager from '../src/Componets/AuthManager/AuthManager';

import TableContainer from './Componets/Table/TableContainer/TableContainer';




export type Todo = {
  id: string;
  text: string
}

export type Todos = Todo[];

export type State = {
  todos: Tasks
}

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  // EDIT_TODO= 'EDIT_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
}

export type Action = {
  type: ActionType.TOGGLE | ActionType.REMOVE,
  payload: Task
}

// const ActionType = {
//   ADD_TODO: 'ADD_TODO',
//   DELETE_TODO: 'DELETE_TODO',
//   // EDIT_TODO: 'EDIT_TODO',
//   FETCH_TODOS: 'FETCH_TODOS',
// }


const todosReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TODO:
      return [...state, payload.todo];

    case ActionType.DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id);

    // case ActionType.EDIT_TODO:
    //   return state
    // .map(todo => {
    //   if (todo.id === payload.id) {
    //     console.log('todo', todo)

    //     return todo
    //   }
    //   if (todo.id !== payload.id) {
    //     return todo
    //   }
    // })

    case ActionType.FETCH_TODOS:
      return payload.todos;

    default:
      return state;
  }
}

const App: React.FC = () => {

  // Todo logic
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

  // const editTodo = (id, text) => {

  //   console.log('todos',todos);

  //   const todo = {
  //     id,
  //     text
  //   }

  //   dispatch({
  //     type: ActionType.EDIT_TODO,
  //     payload: { todo }
  //   })
  // }

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

      console.log('todos', todos)

      dispatch({
        type: ActionType.FETCH_TODOS,
        payload: { todos },
      });
    }
  }, [ActionType.FETCH_TODOS]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // Todo logic


  return (
    <div className="App">
      {/* <AuthManager />
      <h1 className="app-title">Amazing todos</h1>
      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList
        items={todos}
        onDeleteTodo={deleteTodo}
      // onEditTodo={editTodo}
      />} */}

      
      <TableContainer/>

    </div>
  );
}

export default App;
