import React, { useState } from "react";
import "./Food.css"; // Import external CSS file

const Food = () => {
  // State to manage food data
  const [foodData, setFoodData] = useState([
    { id: 1, food: "Chicken Breast", calories: 200, protein: 30 },
    { id: 2, food: "Rice", calories: 150, protein: 3 },
    { id: 3, food: "Broccoli", calories: 50, protein: 5 },
    { id: 4, food: "Protein Shake", calories: 120, protein: 25 },
  ]);

  // Function to delete a food item
  const deleteFood = (id) => {
    setFoodData(foodData.filter((item) => item.id !== id));
  };

  return (
    <div className="food-container">
      <table className="food-table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Protein (g)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((item) => (
            <tr key={item.id}>
              <td>{item.food}</td>
              <td>{item.calories}</td>
              <td>{item.protein}</td>
              <td>
                <button className="delete-button" onClick={() => deleteFood(item.id)}>
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Food;
