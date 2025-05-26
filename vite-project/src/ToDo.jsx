import React from 'react';

function ToDo({ id, task, completed, toggleCompletion }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => toggleCompletion(id)} 
      />
      <span>{task}</span>
    </div>
  );
}

export default ToDo;