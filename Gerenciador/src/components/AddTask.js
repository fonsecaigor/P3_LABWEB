import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const AddTask = ({ categoryName }) => {
  const [text, setText] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(categoryName, text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTask;
