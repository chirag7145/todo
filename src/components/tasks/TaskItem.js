import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, index, deleteTask }) => {
  const onClick = (id) => {
    deleteTask(id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.task}</td>
      <td>
        {' '}
        <button onClick={() => onClick(task.id)}>Cancel</button>
      </td>
    </tr>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
