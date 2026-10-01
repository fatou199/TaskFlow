import Card from "./Card";

function Column({ title, tasks }) {

  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Card key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default Column;
