import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-green-600 h-20 flex justify-between gap-3 items-center  lg:pl-5 p-2 ">
      <img
        src="./logo.png"
        alt=""
        className=" w-10 h-10 lg:w-14 lg:h-14 ml-16"
      />
      <div className="flex gap-3 text-white pr-5">
        <Link to="">
          <p>Home</p>
        </Link>
        <Link to="about-us">
        
          <p>About Us</p>
        </Link>
       <Link to="benefits"> <p>Millet Benefits</p></Link>
      </div>
    </nav>
  );
};

export default Header;
