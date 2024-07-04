import React, { useState } from 'react';

const TaskForm = ({ categories, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !selectedCategory) return;
    onAddTask({ name: taskName, category: selectedCategory });
    setTaskName('');
    setSelectedCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
