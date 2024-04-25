import React from "react";

const G20 = () => {
  return (
    <div class="card text-bg-dark">
      <img src="./images/g20_bg.png" class="card-img" alt="..." />
      <div class="card-img-overlay ">
        <div className="d-flex flex-column justify-content-center gap-2 w-75 m-auto text-center">
          <img src="./images/g20.png" alt="" />
          <h5 class="h1">Aligned with G20 & IYM 2023</h5>
          <p class="card-text text-xl">
            This project supports the goals of G20 for sustainable food
            <br /> security and IYM 2023's focus on millets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default G20;
