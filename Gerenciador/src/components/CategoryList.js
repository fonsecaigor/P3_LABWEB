import React from "react";
import { useTaskContext } from "../context/TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const CategoryList = () => {
  const { categories } = useTaskContext();

  return (
    <div>
      {categories.map((cat, idx) => (
        <div key={idx}>
          <h3>{cat.name}</h3>
          <AddTask categoryName={cat.name} />
          <TaskList category={cat} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
