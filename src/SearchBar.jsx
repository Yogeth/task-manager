function SearchBar({ inputValue, setInputValue, setTasks }) {
  const handleClick = () => {
        if (inputValue.trim().length > 0) {
      setTasks((prevList) => [
        ...prevList,
        {
          id: crypto.randomUUID ? crypto.randomUUID() : Date.now(), 
          taskname: inputValue.trim(),
          strike: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="p-1.5 border mt-3 flex justify-between ">
      <input
        className="outline-none"
        type="text"
        placeholder="Add your task here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>
        <img
          className="h-5 w-5"
          src="/content-tag-add-icon-svgrepo-com.svg" 
          alt="add"
        />
      </button>
    </div>
  );
}

export default SearchBar;
