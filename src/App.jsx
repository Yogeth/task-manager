import { useState, useEffect } from "react";
import ListofTasks from "./ListofTasks.jsx";
import SearchBar from "./SearchBar.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(null);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="bg-red-300 flex justify-center items-center h-screen ">
      <div className="bg-blue-400 p-8">
        <p className="font-semibold text-xl text-center">Task Manager</p>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTasks={setTasks}
        />
        <ListofTasks
          tasks={tasks}
          setTasks={setTasks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
}
