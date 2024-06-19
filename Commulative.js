import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import img3 from "../images/New_campus11.png";
const Commulative = ({ totalMark }) => {
  const [fresult, setFresult] = useState(0.0);
  const [com, setCom] = useState({
    com: "",
    cred: "",
  });
  const handling = (e) => {
    setCom((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  function roundTo(num, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
  }
  const result = (e) => {
    e.preventDefault();
    console.log(totalMark.length, "hi");
    let fresult = 0.0;
    let tCourses = 0.0;
    for (let i = 0; i < totalMark.length; i++) {
      fresult += parseFloat(totalMark[i].gpa);
    }
    tCourses += parseFloat(com.cred);
    tCourses += parseFloat(totalMark.length);
    fresult += parseFloat(com.com) * parseFloat(com.cred);

    setFresult(roundTo(fresult / tCourses, 2));
  };

  return (
    <div
      style={{ backgroundImage: `url(${img3})` }}
      className="bg-no-repeat bg-cover w-screen h-screen bg-green-400 flex justify-center items-center "
      id="commulative"
    >
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className="md:mb-5 flex flex-col justify-around items-center bg-black/70 w-auto md:w-1/2 h-1/2 rounded-lg"
      >
        <div className="w-full flex flex-col justify-center items-center py-3">
          <h1 className="text-white px-2 text-wrap text-base md:text-2xl md:font-semibold md:mb-5 tracking-widest">
            Commulative CGPA
          </h1>
          <input
            className="w-10/12 rounded-full p-2 border-2 border-rose-600"
            type="text"
            name="com"
            onChange={handling}
            placeholder="total cgpa till previous semester..."
          />
        </div>
        <div className="w-auto md:w-full flex flex-col justify-center items-center md:px-5 md:py-3">
          <h1 className="text-white text-base md:text-2xl md:font-semibold md:mb-5 md:tracking-widest">
            Total Completed Courses
          </h1>
          <input
            className="w-10/12 rounded-full p-2 border-2 border-rose-600"
            type="text"
            name="cred"
            onChange={handling}
            placeholder="number of courses you have completed till previous semester..."
          />
        </div>
        <div className="w-auto md:w-full">
          <div className="w-10/12 flex justify-center items-center gap-4 md:gap-10 ml-2 md:ml-[2rem]">
            <button
              className="flex md:mr-16 flex-row items-center rounded-xl bg-orange-500 px-2 md:px-4 py-2 md:py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-300 dark:active:bg-orange-200"
              type="submit"
              onClick={result}
            >
              Calculate
            </button>
            <h1 className="text-green-500 font-mono text-3xl font-bold">
              {fresult}
            </h1>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <Link
            className="no-underline cursor-pointer border-green-500 border-2 p-2 rounded-lg text-green-500 font-semibold hover:border-0 hover:bg-white hover:text-green-500"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            to="feedback"
          >
            Give Feedback?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commulative;
