import React, { useState } from "react";
import "./index.css";

function AppContainer() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [totalTasksLeft, setTotalTasksLeft] = useState(0);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const addTasks = [
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ];
      setTasks(addTasks);
      setTaskInput("");
      updateTotalTasksLeft(addTasks);
    }
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateTotalTasksLeft(updatedTasks);
  };

  const updateTotalTasksLeft = (updateTasks) => {
    const remainingTasks = updateTasks.filter((task) => !task.completed);
    setTotalTasksLeft(remainingTasks.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="total-tasks">Total Tasks Left: {totalTasksLeft}</p>
    </div>
  );
}

export default AppContainer;
