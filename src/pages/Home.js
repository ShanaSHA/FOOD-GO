import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="bg-cover bg-center min-h-screen relative" style={{ backgroundImage: 'url(/path/to/your/food-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
