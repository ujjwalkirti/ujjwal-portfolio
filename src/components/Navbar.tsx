import React from "react";
import { FaHamburger } from "react-icons/fa";
const Navbar = () => {
  return (
    <section className="h-[100px] text-[#64FFDA] flex items-center justify-between px-[25px]">
      <p className="text-[24px]">Ujjwal Kirti</p>
      <FaHamburger className="text-[34px]" />
    </section>
  );
};

export default Navbar;
