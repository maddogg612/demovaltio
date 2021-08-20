import React from 'react';
import './styles.css';
import InputField from './components/InputField';
import TodosList from './components/TodoList';
import { actions } from './store';

function App() {
  function handleDeleteClick() {
    actions.removeAll();
  }
  return (
    <div className="App">
      <h1 style={{ color: 'black', textDecoration: 'underline' }}>Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: '20px', cursor: 'pointer' }}
          onClick={handleDeleteClick}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;
