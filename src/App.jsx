import { useState, useEffect } from "react";
import ListofTasks from "./ListofTasks.jsx";
import SearchBar from "./SearchBar.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [strike, setStrike] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskManager");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskManager", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100 ">
      <div className="bg-stone-200 p-8 rounded-xl">
        <p className="font-semibold text-xl text-center">Task Manager</p>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTasks={setTasks}
          tasks={tasks}
        />

        <ListofTasks
          tasks={tasks}
          setTasks={setTasks}
          strike={strike}
          setStrike={setStrike}
        />
      </div>
    </div>
  );
}
