import React, { useState } from 'react';
import './App.css';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/tasks/AddTask';
import Search from './components/tasks/Search';
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [id, setId] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const addTask = (msg) => {
    const task = {
      id: id,
      task: msg,
    };
    const totalTasks = [...tasks, task];
    setTasks(totalTasks);
    setId(id + 1);
    if (isSearched && task.task.toLowerCase().includes(searchValue)) {
      const totalTasks = [...searchedTasks, task];
      setSearchedTasks(totalTasks);
    }
  };

  const deleteTask = (id) => {
    const totalTasks = tasks.filter((task) => task.id !== id);
    setTasks(totalTasks);
    if (isSearched) {
      console.log(isSearched);
      console.log(searchValue);
      const totalTasks = searchedTasks.filter((task) => task.id !== id);
      setSearchedTasks(totalTasks);
    }
  };

  const searchTasks = (text) => {
    text = text.toLowerCase();
    setSearchValue(text);
    if (text.length > 0) {
      const totalTasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(text)
      );
      setSearchedTasks(totalTasks);
      setIsSearched(true);
    } else {
      setSearchedTasks([]);
      setIsSearched(false);
    }
    // setTasks(totalTasks);
  };

  return (
    <div className='App'>
      <Search searchTasks={searchTasks} />
      <Tasks
        tasks={isSearched ? searchedTasks : tasks}
        deleteTask={deleteTask}
      />
      <AddTask addTask={addTask} />
    </div>
  );
};

export default App;
