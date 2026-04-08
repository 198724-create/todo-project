import { useState } from "react";

function Todos() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

  const filteredTasks = tasks.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>My To-Do App</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")} style={{ marginLeft: "10px" }}>
          Active
        </button>
        <button onClick={() => setFilter("completed")} style={{ marginLeft: "10px" }}>
          Completed
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {filteredTasks.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {item.text}
            </span>

            <button onClick={() => handleToggleComplete(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => handleDeleteTask(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;