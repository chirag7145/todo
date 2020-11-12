import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!task || /^\s*$/.test(task)) 
    {
      setTask('');
    }
    else{
      addTask(task);
      setTask('');
    }
  };

  return (
    <Fragment>
      <form className="todo-form" onSubmit={onSubmit}>
        <input
          type='text'
          name='task'
          placeholder='Add your task ...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-button" type='submit'>Add</button>
      </form>
    </Fragment>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
