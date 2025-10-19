import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaRegCalendarAlt } from "react-icons/fa"; 
const Card = ({
  fetchPromise,
  setProgressCount,
  progressCount,
  taskStatus,
  setTaskStatus,
}) => {
  const [promiseData, setPromiseData] = useState([]);

  useEffect(() => {
    fetchPromise.then((data) => {
      setPromiseData(data);
    });
  }, [fetchPromise]);

  const handleCardClick = (data) => {
    const isAlreadyAdded = taskStatus.some((item) => item.id === data.id);
    if (isAlreadyAdded) {
      toast.warn("Ticket already added in Progress!");
      return;
    }

    toast("Ticket Added to Progress!");
    setProgressCount(progressCount + 1);
    setTaskStatus([...taskStatus, data]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
      {promiseData.map((data) => (
        <div
          onClick={() => handleCardClick(data)}
          key={data.id}
          className="cursor-pointer"
        >
          <div className="h-[150px] bg-gray-100 rounded-lg drop-shadow-md hover:shadow-lg transition duration-300">
            <div className="flex justify-between p-2">
              <h1 className="font-semibold text-base md:text-lg">
                {data.title}
              </h1>
              <button
                className={`rounded-2xl py-1 px-4 text-xs ${
                  data.status === "Open" ? "bg-green-200" : "bg-amber-200"
                }`}
              >
                {data.status}
              </button>
            </div>
            <p className="p-2 text-sm text-gray-700">{data.description}</p>
            <div className="flex justify-between px-2 text-xs text-gray-600">
              <div className="flex items-center gap-4">
                <p className="font-bold">{data.id}</p>
                <p>{data.priority}</p>
              </div>
              <div className="flex items-center gap-4">
                <p>{data.customer}</p>
                <p className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-gray-500 text-sm" />{" "}
                  {data.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
