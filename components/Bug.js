import React from "react";

const Bug = ({ message }) => {
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center mx-auto border border-red-100 font-medium bg-red-100 w-1/2 items-center rounded-md mb-5 text-red-500 my-4 py-2">
        {message}{" "}
        <span className="text-red-500">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Bug;
