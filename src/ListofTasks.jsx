export default function ListofTasks({ tasks, setTasks }) {
  
  function handleClick(taskToDelete) {
    const filtered = tasks.filter((currentTask) => {
      return currentTask.id !== taskToDelete.id;
    });
    setTasks(filtered);
  }

  function handleStrike(taskToToggle) {
    setTasks((prevList) =>
      prevList.map((item) =>
        item.id === taskToToggle.id ? { ...item, strike: !item.strike } : item
      )
    );
  }

  return (
    <>
      <div className="flex flex-col gap-2 mt-2 h-68 overflow-y-auto no-scrollbar">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="flex justify-between items-center border h-11.5 w-full p-1.5
              bg-emerald-800"
            >
              <p
                className={`outline-none no-scrollbar text-stone-100 h-full resize ${
                  task.strike ? "line-through" : ""
                } leading-none pt-2`}
              >
                {task.taskname}
              </p>
              <section className="flex gap-1">
                <img
                  src="/public/check-svgrepo-com.svg"
                  alt="checked"
                  className="h-6 w-6 border cursor-pointer bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleStrike(task)}
                />
                <img
                  className="h-6 w-6 border cursor-pointer bg-amber-600 hover:bg-amber-700"
                  src="/public/bin-svgrepo-com.svg" 
                  alt="remove"
                  onClick={() => handleClick(task)}
                />
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
