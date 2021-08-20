import React from 'react';

const Todo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #ffffffa6',
        padding: '5px',
        cursor: 'pointer',
      }}
    >
      <div onClick={() => console.log('clicked')}></div>
      <div style={{ cursor: 'pointer' }} onClick={() => console.log('clicked')}>
        x
      </div>
    </div>
  );
};

export default Todo;
