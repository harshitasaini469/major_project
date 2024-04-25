import React from "react";

const AboutUs = () => {
  const objectives = [
    {
      heading: "Increase Millet Yields",
      description:
        "Utilize AI and satellite technology to analyze data and provide farmers with personalized recommendations for optimal planting, irrigation, and pest control, leading to higher millet production in India.",
    },
    {
      heading: "Empower Farmers",
      description:
        "Equip farmers with advanced tools and knowledge to improve agricultural practices, resource management, and ultimately their livelihoods.",
    },
    {
      heading: "Promote Sustainable Agriculture",
      description:
        "Encourage climate-smart practices by focusing on millets, a drought-resistant crop, and by optimizing resource use through data-driven insights.",
    },
    {
      heading: "Enhance Food Security",
      description:
        "Contribute to India's food security by promoting a diverse and resilient food system less reliant on water-intensive crops.",
    },
    {
      heading: "Increase Millet Consumption",
      description:
        "Develop a recipe recommender system to raise consumer awareness and encourage the adoption of millet-based recipes in India and globally.",
    },
  ];

  return (
    <div className="flex gap-5 ">
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <p className="h4 text-green-600">Objectives</p>

          {objectives.map((objective) => (
            <div className="flex flex-col gap-1">
              <div>
                <p className="">
                  <span className=" font-semibold ">{objective.heading}</span> :{" "}
                  {objective.description}
                </p>
              </div>
              <div className="w-96 h-0.5 gradient-bg"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
        <p className="text-green-600 h4">Overall Impact</p>

        <div className="flex gap-3 [&>*]:w-2/5">
          <div className="border-1 rounded-lg border-green-600" >
            <p className="text-center bg-green-600 p-2 rounded-t-md text-white">Farmers</p>
            <ul className="p-2">
              <li><span className="text-green-700">&#9642;</span> Increased Yields</li>
              <li><span className="text-green-700">&#9642;</span> Improved resource management</li>
              <li><span className="text-green-700">&#9642;</span> Potentially higher incomes</li>
            </ul>
          </div>
          <div className="border-1 rounded-lg border-green-600">
            <p className="text-center bg-green-600 p-2 rounded-t-md text-white">Consumers</p>
            <p className="p-2">
              Access to diverse, healthy, and sustainable food options with a
              wider variety of millet recipes
            </p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="gradient-border border-3 p-5 w-fit h-fit">
        <div>
          <img src="./images/india.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
