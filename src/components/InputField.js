import * as React from 'react';
import { actions } from '../store';

const InputField = ({ text }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    actions.addToDo({ name: value });
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={value}
        placeholder="Enter your todo..."
        onChange={({ target }) => {
          setValue(target.value);
          //console.log(value);
        }}
      />
    </form>
  );
};

export default InputField;
