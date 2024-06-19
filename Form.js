import React from "react";
import Button from "./Button";
const Form = ({ submitMe, handling, index }) => {
  return (
    <div className="flex w-full md:w-full md:py-2 md:p-6">
      <form
        onSubmit={submitMe}
        className="flex w-full justify-center items-center p-2"
      >
        <div className="flex flex-col items-center justify-center w-[60%]">
          <h1 className="text-white text-base">
            Gpa of Course(s) <span>{index + 1}:</span>
          </h1>
          <input
            className="p-1 w-[80%] mr-4 border-2 border-rose-600 rounded-2xl"
            type="text"
            name="gpa"
            onChange={handling}
            placeholder="write your Gpa...."
          />
        </div>
        <div className="w-[30%] flex flex-col items-center justify-center mr-4 ">
          <h1 className="text-white text-base">
            No of Credit(s) <span>{index + 1}:</span>
          </h1>
          <select
            className="text-center w-full p-1 rounded-2xl border-2 border-rose-600"
            name="credit"
            id=""
            onChange={handling}
          >
            <option className="border-2 border-rose-600 rounded-2xl" value="4">
              4
            </option>
            <option
              className="border-2 border-rose-600 rounded-2xl"
              value="3"
              selected
            >
              3
            </option>
            <option className="border-2 border-rose-600 rounded-2xl" value="2">
              2
            </option>
            <option className="border-2 border-rose-600 rounded-2xl" value="1">
              1
            </option>
          </select>
        </div>
        <Button />
      </form>
    </div>
  );
};

export default Form;
