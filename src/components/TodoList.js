import React from 'react';
//import Todo from './Todo';
import { actions, useTodos } from '../store';

const TodosList = () => {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

function TodoRow({ todo }) {
  function handleCheckBoxChange(event) {
    console.log('filtering', event.target.checked);
    actions.toggleTodo(todo.id, event.target.checked);
  }

  function handleDeleteClick() {
    console.log('this is in todo list', todo.id);
    actions.removeTodo(todo.id);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        padding: '0',
        flexDirection: 'row',
        justifyContent: 'center',
        border: '1px solid #ffffffa6',
        cursor: 'pointer',
        color: 'black',
        textDecoration: todo.completed ? 'line-through' : 'initial',
        fontSize: '25px',
      }}
    >
      <input
        type="checkbox"
        style={{
          border: 'solid',
          padding: '0',
          margin: '0',
          alignItems: 'center',
        }}
        onChange={handleCheckBoxChange}
      />
      <h5>{todo.name}</h5>
      <h5
        style={{
          color: 'red',
          paddingLeft: 10,
          cursor: 'pointer',
          alignItems: 'center',
        }}
        onClick={handleDeleteClick}
      >
        X
      </h5>
    </div>
  );
}

export default TodosList;
