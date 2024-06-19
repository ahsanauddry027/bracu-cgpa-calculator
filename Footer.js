import React from "react";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import { CDBModalFooter } from "cdbreact";
import logo from "../images/ALogo.png";
const Footer = () => {
  return (
    <div className="w-screen h-[7rem]">
      <CDBModalFooter className="w-full h-full shadow">
        <CDBBox className="w-full flex">
          <CDBBox className="w-full flex items-center">
            <a
              className="no-underline flex flex-col md:flew-row justify-center items-center"
              href="home"
            >
              <img
                className="ml-2 w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                alt="logo"
                src={logo}
              />
              <span className="ml-10 md:ml-2 text-sm text-wrap md:text-2xl text-black font-mono font-bold">
                AhsanauddRy
              </span>
            </a>
            <small className="ml-2 text-sm md:flex hidden md:text-xl text-blue-600 mb-2">
              &copy; ahsanauddry, 2024. All rights reserved.
            </small>
          </CDBBox>
          <h1 className="text-sm hidden md:text-xl text-white rounded-xl md:flex md:w-full bg-red-500 justify-center items-center">
            Resources Available in GitHub
            <a
              className="ml-2 no-underline "
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ahsanauddry027/bracu-cgpa-calculator"
            >
              {" "}
              Link
            </a>
          </h1>
          <CDBBox className="w-full h-auto flex justify-center gap-2 md:gap-8">
            <CDBBtn
              flat
              color="dark"
              className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] md:p-2"
            >
              <a
                className="text-white"
                href="https://github.com/ahsanauddry027/"
                target="_blank"
                rel="noreferrer"
              >
                <CDBIcon className="text-sm md:text-xl" fab icon="github" />
              </a>
            </CDBBtn>
            <CDBBtn
              flat
              color="dark"
              className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] md:p-2"
            >
              <CDBIcon className="text-xl" fab icon="twitter" />
            </CDBBtn>
            <CDBBtn
              flat
              color="dark"
              className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] md:p-2"
            >
              <CDBIcon className="text-xl" fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBModalFooter>
    </div>
  );
};

export default Footer;
