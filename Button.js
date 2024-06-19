import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Button = () => {
  const activeClass = `text-white text-xl ml-3 text-center`;
  const [tgl, settgl] = useState(false);
  return (
    <div className="flex md:w-[20%] justify-center items-center">
      <button
        onClick={() => settgl(!tgl)}
        className="w-full p-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-[1.7rem] tracking-wider"
        type="submit"
      >
        {tgl ? (
          <FaCheckCircle className={tgl ? `${activeClass}` : undefined} />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default Button;
