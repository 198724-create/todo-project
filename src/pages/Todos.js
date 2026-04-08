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
    <div className="page-container">
      <h2 className="page-title">My To-Do App</h2>

      <div className="todo-layout">
        <div className="todo-form-section">
          <h3>Add a New Task</h3>
          <input
            className="todo-input"
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="primary-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <div className="todo-list-section">
          <div className="filter-row">
            <button className="filter-button" onClick={() => setFilter("all")}>
              All
            </button>
            <button className="filter-button" onClick={() => setFilter("active")}>
              Active
            </button>
            <button className="filter-button" onClick={() => setFilter("completed")}>
              Completed
            </button>
          </div>

          {filteredTasks.length === 0 ? (
            <p>No tasks to show.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filteredTasks.map((item) => (
                <li key={item.id} className="task-item">
                  <span className={item.completed ? "completed-task" : ""}>
                    {item.text}
                  </span>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      className="action-button"
                      onClick={() => handleToggleComplete(item.id)}
                    >
                      {item.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                      className="action-button"
                      onClick={() => handleDeleteTask(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todos;