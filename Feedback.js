import React from "react";
import img4 from "../images/New_campus5.png";
import { Link } from "react-scroll";

const Feedback = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img4})` }}
      className="bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center"
      id="feedback"
    >
      <div className="w-auto h-auto bg-black/70 rounded-2xl flex flex-col justify-center items-center">
        <iframe
          className="w-[310px] h-[600px] md:w-[640px] md:h-[826px] text-wrap"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf0ax_fv-9rpThLx6-m-oP0xKbO5dzPDWzmSqsYcgh0AKFO2w/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="feedbackSection"
        >
          Loading…
        </iframe>
        <div className="w-10/12 flex justify-between items-center">
          <button
            className="mt-2 mb-2 text-white font-2xl font-semibold bg-purple-700 hover:bg-purple-600 rounded-lg p-2 cursor-pointer border-2 border-purple-600"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
          <Link
            className="no-underline mt-2 mb-2 text-white font-2xl font-semibold bg-purple-700 hover:bg-purple-600 rounded-lg p-2 cursor-pointer border-2 border-purple-600"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            to="app"
          >
            Back to HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
