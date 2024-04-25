import React from "react";

const Benefits = () => {
  return (
    <div className="overflow-y-auto p-5 w-[85vw] mx-auto no-scrollbar">
      <p className="text-4xl font-semibold text-center">Millets Benefits</p>
      <div>
        <div className="container mx-auto my-4">
          <p>
            Welcome to our Millet Benefits page, where we explore the incredible
            nutritional benefits of including millets in your diet. Millets are
            small-seeded grains that have been a staple in various cultures for
            centuries. Not only are they versatile and delicious, but they also
            offer a wide array of health benefits.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="container mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">
              Nutrient-Rich Powerhouses
            </h2>
            <p className="text-lg">
              Millet grains are a rich source of essential nutrients, including:
            </p>
            <ul className="list-decimal pl-6">
              <li>
                <strong>Proteins: </strong> Millets are a great plant-based
                protein source, making them an excellent choice for vegetarians
                and vegans.
              </li>
              <li>
                <strong>Fiber: </strong> High fiber content aids digestion,
                promotes a feeling of fullness, and supports a healthy digestive
                system.
              </li>
              <li>
                <strong>Vitamins and Minerals: </strong> Millets contain
                essential vitamins and minerals, such as iron, magnesium,
                phosphorus, and B-vitamins.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Health Benefits
            </h2>
            <ol className="list-decimal pl-6">
              <li>
                <strong>Heart Health:</strong> Millets can contribute to heart
                health by helping to lower cholesterol levels and regulate blood
                pressure.
              </li>
              <li>
                <strong>Weight Management:</strong> The high fiber content in
                millets can support weight management by promoting satiety and
                reducing overall calorie intake.
              </li>
              <li>
                <strong>Digestive Health:</strong> Millets' fiber content aids
                in digestion, prevents constipation, and maintains a healthy
                gut.
              </li>
              <li>
                <strong>Gluten-Free Alternative:</strong> Millets are naturally
                gluten-free, making them an excellent choice for individuals
                with gluten sensitivities or celiac disease.
              </li>
            </ol>
          </div>
          <div className="w-2/3 my-auto">
            <img src="./millets.png" alt="millets" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
