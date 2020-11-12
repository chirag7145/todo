import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const Tasks = ({ tasks, deleteTask }) => {
  console.log(tasks);
  return (
    <div className="tasks">
      <ul className='total-tasks'>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
      </ul>
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Tasks;
