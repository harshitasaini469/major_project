import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg h-20 flex justify-between gap-3 items-center  lg:pl-5 p-3 shadow-sm">
      <Link to="">
        {" "}
        <div className="flex gap-2 cursor-pointer ">
          <img src="./logo.png" alt="" className=" w-10 h-10 ml-16" />
          <p className="text-xl self-end	">MilletScape</p>
        </div>
      </Link>

      <div className="flex gap-3 text-green-600 pr-5">
        <Link to="">
          <p className="hover:outline hover:outline-1 active:outline-none p-2 rounded-md active:border-b-4 active:border-green-600 ">
            Home
          </p>
        </Link>
        <Link to="prediction">
          <p className="hover:outline hover:outline-1 active:outline-none p-2 rounded-md active:border-b-4 active:border-green-600">
            Prediction
          </p>
        </Link>
        <Link to="about">
          {" "}
          <p className="hover:outline hover:outline-1 active:outline-none p-2 rounded-md active:border-b-4 active:border-green-600">
            Andhra Pradesh
          </p>
        </Link>

        {/* <Link to="recipe"> <p className="hover:outline hover:outline-1 active:outline-none p-2 rounded-md active:border-b-4 active:border-green-600">Recipe</p></Link> */}
        {/* <Link to="blogs"> <p className="hover:outline hover:outline-1 active:outline-none p-2 rounded-md active:border-b-4 active:border-green-600">Blogs</p></Link> */}
      </div>
    </nav>
  );
};

export default Header;
