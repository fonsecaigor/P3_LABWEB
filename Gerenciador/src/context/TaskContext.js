import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const addCategory = (name) => {
    if (!categories.find((cat) => cat.name === name)) {
      setCategories([...categories, { name, tasks: [] }]);
    }
  };

  const addTask = (categoryName, taskText) => {
    setCategories(
      categories.map((cat) => {
        if (cat.name === categoryName) {
          return {
            ...cat,
            tasks: [...cat.tasks, { text: taskText, done: false }],
          };
        }
        return cat;
      })
    );
  };

  const toggleTask = (categoryName, taskIndex) => {
    setCategories(
      categories.map((cat) => {
        if (cat.name === categoryName) {
          const updatedTasks = cat.tasks.map((task, index) =>
            index === taskIndex ? { ...task, done: !task.done } : task
          );
          return { ...cat, tasks: updatedTasks };
        }
        return cat;
      })
    );
  };

  return (
    <TaskContext.Provider
      value={{ categories, addCategory, addTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
