import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div class="card text-white border-none">
      <img src="./images/Hero.png" class="card-img" alt="..." />
      <div class="card-img-overlay flex items-center ">
        <div className="d-flex flex-column justify-content-center gap-3 p-3">
          <p class="card-title text-5xl fw-semibold">
            Optimizing Millet Yields : <br /> A Sustainable Solution <br /> for
            Bharat
          </p>

          <p class="card-text fs-5 fw-normal">
            Leveraging AI and satellite technology to empower farmers
          </p>
          <Link to="/prediction">
            {" "}
            <button className="text-green-600 p-2 text-xl font-semibold rounded-md w-fit hover:bg-green-600 px-3 hover:text-white bg-slate-100">
              Predict your Millet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
