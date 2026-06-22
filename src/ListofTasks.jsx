export default function ListofTasks({  tasks, setTasks,currentIndex,setCurrentIndex}) {
  function handleClick(val) {
     const filtered = tasks.filter((currentValue)=>{
      return val!==currentValue;
     })
     setTasks(filtered);
  }

  function handleStrike(element,i){
  setTasks(prev=>([...prev,{...element,strike:true}]))
  console.log(tasks);
  }

  return (
    <>
      <div className="flex flex-col gap-2 mt-2 h-68 overflow-y-auto  no-scrollbar">
        {tasks.map((task, index) => {
          console.log(task.strike);
          return (
            <div
              key={index}
              className="bg-green-400 flex  justify-between items-center border h-11.5 w-full p-1.5"
            >
              <p className={`outline-none no-scrollbar h-full resize-none ${task.strike && 'line-through'} leading-none pt-2`} >
                {task.taskname}
              </p>
              <section className="flex gap-1"> 
                <img src="src/assets/check-svgrepo-com.svg" 
                alt="checked" 
                className="h-6 w-6 border"
                onClick={()=>handleStrike(task)}
                />
                <img
                  className="h-6 w-6 border"
                  src="src\assets\bin-svgrepo-com.svg"
                  alt="remove"
                  onClick={() => handleClick(task,index)}
                />
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
