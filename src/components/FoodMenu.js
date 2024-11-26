// src/components/FoodMenu.js
import React from "react";

const foodItems = [
  { id: 1, name: "Oysters", description: "Fresh and delicious oysters.", price: "$15" },
  { id: 2, name: "Steak", description: "Juicy steak cooked to perfection.", price: "$25" },
  { id: 3, name: "Salmon", description: "Grilled salmon with lemon.", price: "$20" },
];

function FoodMenu() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodItems.map((food) => (
          <div key={food.id} className="border rounded-md shadow-lg p-4 bg-white">
            <h3 className="text-lg font-bold">{food.name}</h3>
            <p className="text-gray-600">{food.description}</p>
            <p className="text-red-600 font-bold">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
