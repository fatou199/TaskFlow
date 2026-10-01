import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const tasks = [
    { id: 1, title: "Faire les courses" },
    { id: 2, title: "Appeler le tuteur" },
    { id: 3, title: "Réviser React" },
    { id: 4, title: "Aller à la salle de sport" },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default App;
