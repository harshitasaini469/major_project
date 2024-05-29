import React from "react";
import Hero from "../components/Hero";
import G20 from "../components/G20";
import MilletPrediction from "../components/MilletPrediction";
import RecipeRecommendation from "../components/RecipeRecommendation";
import UNGoals from "../components/UNGoals";
import AboutUs from "../components/AboutUs";
const Home = () => {
  return (
    <div className="container flex flex-col gap-5 p-5">
      <Hero />
      <AboutUs/>
      <G20 />
      <MilletPrediction />
      <RecipeRecommendation />
      <UNGoals />
    </div>
  );
};

export default Home;