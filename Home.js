import React, { useState } from "react";
import { Link } from "react-scroll";
import Commulative from "./Commulative";
import img2 from "../images/New_campus10.png";
import Form from "./Form";
export default function Home({ mark }) {
  const [fmark, setFmark] = useState(0); //Storing Final cgpa
  const [marks, setMarks] = useState({
    gpa: "",
    credit: "",
  });
  const [total, setTotal] = useState([]);

  //Functional onChange
  const handling = (e) => {
    setMarks((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //Functional Submit Button
  const submitMe = (e) => {
    e.preventDefault();
    setTotal((prev) => {
      return [...prev, marks];
    });
  };

  function roundTo(num, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
  }

  // CGPA calculation =>
  const calculate = () => {
    let finalmark = 0.0;
    let tcredit = 0.0;
    for (let i = 0; i < total.length; i++) {
      if (total[i].gpa === "" && total[i].credit === "") {
        finalmark += 0.0;
        tcredit += 0.0;
      } else if (total[i].credit === "") {
        finalmark += parseFloat(total[i].gpa) * parseFloat(3);
        tcredit += parseFloat(3);
      } else if (total[i].gpa === "") finalmark += 0.0;
      else {
        finalmark += parseFloat(total[i].gpa) * parseFloat(total[i].credit);
        tcredit += parseFloat(total[i].credit);
      }
    }
    setFmark(roundTo(finalmark / tcredit, 2));
    console.log(finalmark, tcredit);
    console.log(total);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${img2})` }}
        id="home"
        className="w-screen bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center"
      >
        <div className="flex flex-col rounded-2xl bg-black/60 justify-around items-center w-auto md:w-1/2 h-auto">
          <h1 className="mt-1 text-base text-wrap px-2 text-white md:tracking-wider md:text-xl font-medium">
            <span className="text-rose-500">Note: </span>
            Make Sure to Click the Submit buttons accordingly
            <span className="text-rose-500"> !!!</span>
          </h1>
          {Array.apply(0, { length: mark }).map((_, index) => (
            <>
              <Form submitMe={submitMe} handling={handling} index={index} />
            </>
          ))}
        </div>
        <div className="bg-black/60 md:mt-10 mt-2 md:w-1/2 h-[10rem] flex flex-col justify-between rounded-2xl">
          <div className="flex justify-around w-full p-3">
            <button
              className="md:px-5 px-1 mr-16 hover:bg-green-500 text-white text-base md:text-2xl md:font-medium bg-green-600 rounded-lg"
              onClick={calculate}
            >
              Calculate Result
            </button>

            <h1 className=" text-yellow-400 text-3xl font-mono font-semibold">
              {fmark}
            </h1>
          </div>
          <div className="w-full flex rounded-lg mt-3">
            <Link
              className="md:ml-[40%] text-wrap text-white text-base md:font-2xl md:ont-semibold bg-purple-600 ml-2 mr-3 mb-2 hover:bg-purple-500 md:mb-3 rounded-lg md:p-2 cursor-pointer border-2 border-purple-600 no-underline"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              to="commulative"
            >
              Calculate Commulative CGPA?
            </Link>
          </div>
        </div>
      </div>
      <Commulative totalMark={total} />
    </>
  );
}
