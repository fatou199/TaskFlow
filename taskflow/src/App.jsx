import { useState } from "react";
import "./App.css";
import Column from "./components/Column";

function App() {
  const tasks = [
    { id: 1, title: "Faire les courses", status: "todo" },
    { id: 2, title: "Appeler le tuteur", status: "doing" },
    { id: 3, title: "Réviser React", status: "done" },
  ];

  return (
    <div className="board">
      <Column title="À faire" tasks={tasks.filter((t) => t.status === "todo")} />
      <Column title="En cours" tasks={tasks.filter((t) => t.status === "doing")} />
      <Column title="Terminé" tasks={tasks.filter((t) => t.status === "done")} />
    </div>
  );
}

export default App;
