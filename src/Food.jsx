import React, { useState, useEffect } from "react";
import "./Food.css"; // Import external CSS
import { fetchDailyFoodLog, deleteFoodFromDailyLog } from "./firebase"; // Firestore functions

const Food = () => {
  const [foodData, setFoodData] = useState([]); // State for today's food log
  const today = new Date().toISOString().split("T")[0]; // Get current date

  useEffect(() => {
    fetchDailyFoodLog(today).then(setFoodData); // Load today's food log from Firestore
  }, []);

  // 🔹 Function to delete a food item from Firestore
  const deleteFood = async (id) => {
    await deleteFoodFromDailyLog(today, id); // Remove from Firestore
    setFoodData(foodData.filter((item) => item.id !== id)); // Update UI
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
          {foodData.length === 0 ? (
            <tr><td colSpan="4">No food logged for today</td></tr>
          ) : (
            foodData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.protein}</td>
                <td>
                  <button className="delete-button" onClick={() => deleteFood(item.id)}>✖</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Food;
