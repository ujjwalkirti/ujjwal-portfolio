import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <section className="h-[100px] text-[#64FFDA] flex items-center justify-between px-[25px] relative ">
      <p className="text-[24px]">Ujjwal Kirti</p>
      <FaHamburger
        className="text-[34px]"
        onClick={() => {
          setShowNavbar(true);
        }}
      />
      <div
        className={
          "absolute top-0 right-0 w-[100%] min-h-screen z-20 flex justify-end filter backdrop-filter backdrop-blur-sm"
        }
      >
        <div className="w-[75%] h-screen bg-[#112240] pt-10">
          <MdOutlineClose
            className="text-[40px]"
            onClick={() => {
              setShowNavbar(false);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
