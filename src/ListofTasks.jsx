export default function ListofTasks({ListofTaskss , setListofTaskss}) {
 function handleClick(index) {
    setListofTaskss(prevList => {
      const newList = [...prevList];
      newList.push(index);
      return newList;
    });
  }
  return (
    <>
      <div className="flex flex-col gap-2 mt-2 h-68 overflow-y-auto  no-scrollbar">
        {ListofTaskss.map((task, index) => {
          return (
              <div key={index} className="bg-green-400 flex  justify-between items-center border h-11.5 w-full p-1.5">
              <textarea className="outline-none no-scrollbar h-full resize-none leading-none">{task}</textarea>
                <button onClick={() => handleClick(index)}>
                  <img className="h-6 w-6" src="src\assets\bin-svgrepo-com.svg" alt="remove" />
                </button>
              </div>
          )
        })}
     </div>
    </>
  )
}
