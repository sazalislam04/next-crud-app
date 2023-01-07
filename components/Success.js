import React from "react";

const Success = ({ message }) => {
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center items-center mx-auto border border-yellow-100 font-medium bg-yellow-100 w-1/2 rounded-md mb-5 text-green-700 my-4 py-2">
        {message}{" "}
        <span className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Success;
