import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  // Retrieve the cart items and user name from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const userName = localStorage.getItem("userName") || "Guest"; // Fallback to "Guest" if no name is stored

  // Function to navigate to the feedback page
  const handleFeedback = () => {
    navigate("/feedback");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl mb-6">Your Cart</h2>
      
      {/* Display the user's name */}
      <p className="text-xl mb-4">Welcome, {userName}!</p>

      <div>
        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="p-4 border rounded shadow-sm">
                <h3 className="text-xl mb-2">{item.name}</h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-xl font-bold">Rs. {item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button to navigate to the feedback page */}
      <button
        onClick={handleFeedback}
        className="mt-8 bg-yellow-600 text-black py-2 px-6 rounded-full text-xl"
      >
        Give Feedback
      </button>
    </div>
  );
};

export default CartPage;
