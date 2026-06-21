function SearchBar({inputValue, setInputValue,setListofTaskss}) {
  const handleClick = () => {
    if(inputValue.length>0)
    {
    setListofTaskss(prevList => [...prevList, inputValue]);
    setInputValue("");
    }
  }
  return (
    <div className="p-1.5  border mt-3 flex justify-between">
          <input className="outline-none " type="string"
           placeholder="Add your task here"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={handleClick}>
            <img className="h-5 w-5" src="src\assets\content-tag-add-icon-svgrepo-com.svg" alt="add" />
          </button>
     </div>
  )
}

export default SearchBar