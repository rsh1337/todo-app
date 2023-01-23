import { useEffect, useState } from "react";
import Header from "../components/header";
import Task from "../components/task";

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
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
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  
  return (
    <h1 className="bg-[#FCFCFC] min-h-screen w-screen">
      <div className="top-0 sticky">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={e => setNewTask(e.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
      <div>
      {tasks.map((task, index) => (
          <div className="mt-10" key={index}>
            <Task task={task} />
          </div>
        ))}
      </div>
    </h1>
  )
}
