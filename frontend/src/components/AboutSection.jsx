import React from "react";

const AboutSection = () => {
  const milletFacts = [
    {
      heading: "Millet Powerhouse",
      icon: "./images/powerhouse.png",
      description:
        "Andhra Pradesh is a major cultivator of diverse millets like Jowar, Bajra, Ragi, and more.",
    },
    {
      heading: "Climate Champion",
      icon: "./images/climate.png",

      description:
        "Millets thrive in Andhra's climate, needing less water and resisting pests, making them a sustainable choice.",
    },
    {
      heading: "Research Ready",
      icon: "./images/research.png",

      description:
        "Varied agroclimatic zones and existing millet cultivation infrastructure make Andhra Pradesh ideal for research.",
    },
    {
      heading: "District Diversity",
      icon: "./images/district.png",

      description:
        "From reviving cultivation in Srikakulam to optimizing yields in Anantapur, Andhra Pradesh offers diverse research opportunities.",
    },
  ];

  return (
    <div class="card  border-0  bg-green-600 h-[90vh] flex justify-center items-center p-4 ">
      <div class="row g-0">
        <div class="col-md-7">
          <div class="card-body  space-y-5">
            <div className="flex flex-col gap-3">
              {milletFacts.map((fact) => {
                return (
                  <div className="flex gap-3 text-lg bg-white p-4 rounded-md items-center ">
                    <img src={fact.icon} alt="icon" className="w-12 h-12"/>

                    <p className="">
                      <span className="text-green-600 font-semibold ">
                        {fact.heading}
                      </span>{" "}
                      : {fact.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="col-md-4 flex flex-col justify-center items-center">
        <h5 class="card-title h2 p-2 text-white text-center">
              About Andhra Pradhesh and <br/>Millet Cultivation
            </h5>
         <div className="h-96 w-full flex items-center justify-center ">
      
         <img
            src="./images/millets.png"
            class="img-fluid rounded-full h-full w-full"
            alt="..."
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
