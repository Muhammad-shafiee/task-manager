import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [categories] = useState([
    { id: 1, name: 'Personal' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Shopping' },
    { id: 4, name: 'Study' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterTasksByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main className="App-content">
        <TaskForm categories={categories} onAddTask={addTask} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChangeCategory={filterTasksByCategory}
        />
        <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
};

export default App;
