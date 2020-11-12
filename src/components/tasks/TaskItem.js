import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, index, deleteTask }) => {
  const onClick = (id) => {
    deleteTask(id);
  };

  return (

      <li className="task"> <div className="task-item"> <p>{task.task}</p> <button onClick={() => onClick(task.id)} ><i className="fas fa-trash-alt"></i></button></div> 
      <div className="clr"></div>
      </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
