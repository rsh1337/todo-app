import { useEffect, useState } from "react";
import Header from "../components/header";
import Task from "../components/task";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        console.log(storedTasks)
        setTasks(storedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: newTaskName,
      details: newTaskDetails
    }
    setTasks([...tasks, newTask]);
    setNewTaskName("");
    setNewTaskDetails("");
  }
  
  return (
    <h1 className="bg-[#FCFCFC] h-screen w-screen">
      <div className="top-0 sticky">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
        <input value={newTaskName} onChange={e => setNewTaskName(e.target.value)} placeholder="Task name"/>
        <input value={newTaskDetails} onChange={e => setNewTaskDetails(e.target.value)} placeholder="Task details"/>
        <button type="submit">Add Task</button>
      </form>
      <div className="mb-10">
      {tasks.map((task, index) => (
          <div className="mt-10" key={index}>
            <Task task={task.name} />
          </div>
        ))}
      </div>
    </h1>
  )
}
