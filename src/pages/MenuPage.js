import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  // Sample food items
  const foodItems = [
    { name: "Burger", price: "99", description: "Delicious beef burger" },
    { name: "Pizza", price: "120", description: "Cheese pizza with toppings" },
    { name: "Biryani", price: "150", description: "Spicy chicken biryani" },
  ];

  // Function to handle adding items to cart
  const handleAddToCart = (food) => {
    // Optionally, save the food item to localStorage or context (cart management)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl mb-6">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodItems.map((food, index) => (
          <div key={index} className="p-4 border rounded shadow-sm">
            <h3 className="text-xl mb-2">{food.name}</h3>
            <p className="text-gray-500">{food.description}</p>
            <p className="text-xl font-bold">Rs. {food.price}</p>
            <button
              onClick={() => handleAddToCart(food)}
              className="bg-green-600 text-white p-2 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
