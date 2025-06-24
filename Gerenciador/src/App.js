import React from "react";
import { TaskProvider } from "./context/TaskContext";
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";

const App = () => {
  return (
    <TaskProvider>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Gerenciador de Tarefas por Categoria</h2>
        <AddCategory />
        <hr />
        <CategoryList />
      </div>
    </TaskProvider>
  );
};

export default App;
