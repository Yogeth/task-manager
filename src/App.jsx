import { useState, useEffect } from "react";
import ListofTasks from "./ListofTasks";
import SearchBar from "./searchBar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [ListofTaskss, setListofTaskss] = useState([]);

  useEffect(() => {
    console.log(ListofTaskss);
  }, [ListofTaskss]);
  return (
    <div className="bg-red-300 flex justify-center items-center h-screen ">
      <div className="bg-blue-400 p-8">
        <p className="font-semibold text-xl text-center">Task Manager</p>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setListofTaskss={setListofTaskss}
        />
        <ListofTasks
          ListofTaskss={ListofTaskss}
          setListofTaskss={setListofTaskss}
        />
      </div>
    </div>
  );
}

export default App;
