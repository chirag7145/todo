import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const Tasks = ({ tasks, deleteTask }) => {
  console.log(tasks);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Tasks;
