import React from "react";
import { FaCheck } from "react-icons/fa";

const ResolvedCard = ({ rTask }) => {
  return (
<div className="bg-violet-200 py-2.5 p-4 mt-3 mb-6 md:mb-10 font-semibold text-lg rounded-lg">
      <p>
        <span className="text-black-700">{rTask.title}</span>
      </p>
      <p className="text-green-500 flex items-center gap-2 mt-2">
        <FaCheck className="text-green-500 text-xl" />
        Completed
      </p>
    </div>
  );
};

export default ResolvedCard;
