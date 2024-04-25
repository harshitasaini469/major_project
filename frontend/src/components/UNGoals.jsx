import React from 'react'

const UNGoals = () => {
    const milletBenefits = [
        {
            heading: "Millets: Water Warriors",
            description: "Require less water compared to other crops."
        },
        {
            heading: "Natural Defense System",
            description: "Resist pests and diseases, reducing pesticide needs."
        },
        {
            heading: "Cost-Effective Champion",
            description: "Lowers farming costs by requiring fewer fertilizers and pesticides."
        },
        {
            heading: "Sustainable Future",
            description: "Promotes sustainable agriculture for food security."
        }
    ];
    
  return (
    <div className="bg-blue-100 flex flex-col gap-5 p-4 justify-items-center align-items-center rounded-md">
    <div className="flex gap-1 ">
      <div className="w-28 h-1 bg-blue-400 mt-3"></div>
      <p className="h3">Sustainable Approach</p>
      <div className="w-28 h-1 bg-blue-400 mt-3"></div>
    </div>
    <div class="card mb-3 bg-transparent border-none">
      <div class="row g-3">
        <div class="col-md-5">
          <img
            src="./images/un.png"
            class="img-fluid rounded-start h-full"
            alt="..."
          />
        </div>
        <div class="col-md-7 ">
          <div class="card-body  h-full flex flex-col gap-3">
            {milletBenefits.map((benefit) => {
              return (
                <div className="flex gap-3 align-items-center ">
                    <div className=""><p className="text-3xl text-blue-500">&bull;</p></div>
                  <p className="">
                    <span className="text-blue-400 font-semibold">
                      {benefit.heading}
                    </span>{" "}
                    : {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UNGoals
