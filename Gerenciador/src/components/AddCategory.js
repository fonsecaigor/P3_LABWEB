import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const AddCategory = () => {
  const [name, setName] = useState("");
  const { addCategory } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addCategory(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adicionar Nova Categoria"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddCategory;
