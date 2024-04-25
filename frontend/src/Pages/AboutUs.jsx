import React from "react";
const AboutUs = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <p className="text-4xl font-semibold text-center">About Us</p>
      <div className=" w-[80vw] m-auto flex gap-4 h-fit">
        <div className="w-2/3">
          <p>
            Welcome to <span className="font-semibold">Optimillet</span>, where
            we are dedicated to revolutionizing millet farming practices through
            the integration of cutting-edge technologies.
          </p>
          <br/>
          <p>
            Our project aligns with the International Year of Millets (IYM) in
            2023, recognizing the crucial role millets play in addressing global
            challenges like hunger, malnutrition, and climate change. 
          </p>
          <br/>
          <p>
            Our mission is to empower farmers with data-driven tools, promote
            sustainable agriculture, and contribute to global efforts in
            addressing challenges like hunger, malnutrition, and climate change.
          </p>
        </div>
        <div className="w-96">
          <img src="./farmer1.png" alt="farmer" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
