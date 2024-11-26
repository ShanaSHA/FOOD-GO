import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  // Function to handle the navigation
  const handleStartOrdering = () => {
    // Check if the user is already logged in (this could be based on a context, localStorage, etc.)
    const isLoggedIn = false; // This is a placeholder. Replace with your login logic.

    if (isLoggedIn) {
      navigate("/menu"); // Navigate to the food menu if logged in
    } else {
      navigate("/signup"); // Navigate to the signup page if not logged in
    }
  };

  return (
    <div className="text-center p-16 text-white">
      <h1 className="text-5xl font-bold leading-tight">
        Welcome to FoodGo
      </h1>
      <p className="text-xl mt-4">
        Discover and order your favorite food from local restaurants
      </p>
      <button
        onClick={handleStartOrdering}
        className="mt-8 bg-yellow-600 text-black py-2 px-6 rounded-full text-xl"
      >
        Start Ordering
      </button>
    </div>
  );
};

export default HeroSection;
