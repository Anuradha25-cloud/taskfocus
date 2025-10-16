
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks([...tasks,task]);
}
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendlt task manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>

    </div>
    
  )
}

