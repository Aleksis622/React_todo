import React from 'react';

function ToDo({ id, task, completed, toggleCompletion }) {
  
  return (
    <article>
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => toggleCompletion(id)} 
      />
      <span>{task}</span> 
      <ToDo key={todo.id} {...todo} onDelete={handleDelete} />
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
   </article>
  );
}

export default ToDo;