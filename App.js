import "./App.css";
import { useState } from "react";
import Home from "./comps/Home";
import { Link } from "react-scroll";
import Feedback from "./comps/Feedback";
import img1 from "./images/New_campus8.png";
import { BiLogoTelegram } from "react-icons/bi";
import Footer from "./comps/Footer";
function App() {
  const [name, setName] = useState("");
  const [mark, setMark] = useState(0);
  return (
    <>
      <div
        id="app"
        style={{
          backgroundImage: `url(${img1})`,
          backdropFilter: "blur(10px)",
          overflowX: "hidden",
        }}
        className="App md:backdrop-blur-2xl bg-no-repeat bg-cover w-screen h-screen bg-blue-300 flex items-center justify-center"
      >
        <div
          style={{
            backdropFilter: "blur(10px)",
          }}
          className=" rounded-2xl shadow-lg bg-black/80 flex flex-col w-[50%] h-auto md:h-[50%] justify-around items-center pb-5"
        >
          <h1 className="text-base py-2 text-wrap md:text-3xl text-white font-mono font-semibold md:font-black">
            BRAC University CGPA calculator.💚
          </h1>
          <h1 className="text-white font-semibold text-base text-wrap md:text-xl">
            Hi, <span className="text-rose-600 capitalize">{name}</span>
          </h1>

          <h1 className="text-white font-mono text-base text-wrap md:text-xl">
            Enter your name
          </h1>

          <input
            className="border-4 rounded-2xl p-2 mb-5 border-rose-500 w-[80%]"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <h1 className="text-white font-mono text-base text-wrap px-2 md:text-xl">
            Number of Courses taken( Current Semester):
          </h1>
          <input
            className="border-4 rounded-2xl p-2 border-rose-500 w-[80%]"
            type="text"
            onChange={(e) => setMark(e.target.value)}
            placeholder="write number of courses in digits."
          />
          <Link
            className="flex items-center mt-3 justify-center cursor-pointer rounded-xl border-2 border-purple-500 px-3 py-2 text-base text-purple-500 hover:text-red-400 duration-1000 active:bg-purple-700/5 dark:border-purple-400 dark:bg-purple-400/10 dark:text-white dark:hover:bg-purple-300/10 dark:active:bg-purple-200/10 font-bold tracking-widest no-underline"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            to="home"
          >
            <BiLogoTelegram className="text-2xl mr-1" />
            SUBMIT
          </Link>
        </div>
      </div>

      <Home mark={mark} />
      <div className="frame bg-black/70">
        <Feedback />
      </div>
      <div className="w-screen h-1/2">
        <Footer />
      </div>
    </>
  );
}

export default App;
