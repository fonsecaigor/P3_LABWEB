import React from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskList = ({ category }) => {
  const { toggleTask } = useTaskContext();

  return (
    <ul>
      {category.tasks.map((task, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(category.name, index)}
            />
            {task.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
