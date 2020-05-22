import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='task'
          placeholder='Add your task ...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
