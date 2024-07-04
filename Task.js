import React from 'react';

const Task = ({ task, onDeleteTask }) => {
  return (
    <div className="task">
      <p>{task.name}</p>
      <p className="category">{task.category}</p>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
