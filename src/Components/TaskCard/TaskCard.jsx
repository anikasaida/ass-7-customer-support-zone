import React from "react";
import { toast } from "react-toastify";

const TaskCard = ({
  removeTicket,
  task,
  setProgressCount,
  progressCount,
  resolvedCount,
  setResolvedCount,
  setResolvedTask,
  resolvedTask,
  ticketCard,
  setTicketCard,
  removeTicketCard,
}) => {
  const handleRemove = () => {
    removeTicket(task);
    setProgressCount(progressCount - 1);
    setResolvedCount(resolvedCount + 1);

    setResolvedTask([...resolvedTask, task]);
    setTicketCard([...ticketCard, task]);
    removeTicketCard(task);
    toast("Task marked as resolved!");
  };

  return (
    <div
      key={task.id}
      className="bg-gray-100 p-4 mb-6 sm:mb-8 md:mb-10 mt-5 rounded-lg shadow-md w-full"
    >
      <h2 className="mb-3 font-semibold text-lg text-gray-800 break-words">
        {task.title}
      </h2>
      <button
        onClick={handleRemove}
        className="bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white w-full py-2 font-medium rounded-md"
      >
        Complete
      </button>

      
        
     
    </div>
  );
};

export default TaskCard;
