import React, { useState, useEffect } from "react";
import Button from "../components/Button";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    priority: "Low",
    deadline: "",
  });

  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.title.trim()) {
      setTasks((prevTasks) => [...prevTasks, { ...form, id: Date.now() }]);
      setForm({ title: "", priority: "Low", deadline: "" });
    }
  };
  const toggleTaskCompletion = (formID) => {
    setTasks((prevTasks) =>
      prevTasks.map((form) =>
        form.id === formID ? { ...form, completed: !form.completed } : form
      )
    );
  };

  const filteredTasks = tasks.filter((form) => {
    if (filter === "All") return true;
    if (filter === "Completed") return form.completed;
    if (filter === "Incomplete") return !form.completed;
    return form.priority === filter;
  });

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">Task Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Priority:</label>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Add Task</Button>
      </form>
      {/* Filter Dropdown */}
      <div className="flex flex-col ">
        <label htmlFor="filter" className="flex flex-col ">
          Filter Tasks{" "}
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex flex-col "
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>
      {/* Displaying Filtered Tasks */}
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Task List:</h2>
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              {task.title} (Priority: {task.priority}, Deadline: {task.deadline}
              )
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
