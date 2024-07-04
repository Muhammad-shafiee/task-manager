import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
