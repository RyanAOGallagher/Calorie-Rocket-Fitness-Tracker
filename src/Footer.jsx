import React, { useRef, useState, useEffect } from "react";
import ActionSheet from "actionsheet-react";
import "./Footer.css";
import { 
  fetchFoodItems, addFoodItem, updateFoodItem, deleteFoodItem, 
  addFoodToDailyLog 
} from "./firebase"; // Import Firestore functions

const Footer = () => {
  const ref = useRef();
  const [foodList, setFoodList] = useState([]); // Available foods
  const [newFood, setNewFood] = useState({ name: "", calories: "", protein: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFoodItems().then(setFoodList); // Load all foods
  }, []);

  // 🔹 Log Clicked Food to Today's Daily Log
  const handleLogFood = async (food) => {
    await addFoodToDailyLog(food);
  };

  // 🔹 Handle Adding or Editing Food in the Database
  const handleSaveFood = async () => {
    if (!newFood.name || !newFood.calories || !newFood.protein) return;

    if (editId) {
      await updateFoodItem(editId, newFood);
      setEditId(null);
    } else {
      await addFoodItem(newFood);
    }

    setNewFood({ name: "", calories: "", protein: "" });
    fetchFoodItems().then(setFoodList);
  };

  // 🔹 Handle Deleting Food from the Database
  const handleDeleteFood = async (id) => {
    await deleteFoodItem(id);
    fetchFoodItems().then(setFoodList);
  };

  return (
    <>
      <footer className="footer">
        <button className="footer-button" onClick={() => ref.current.open()}>+</button>
      </footer>

      <ActionSheet ref={ref}>
        <div className="food-list-content">
          <h3>Food List</h3>
          <ul>
            {foodList.map((item) => (
              <li key={item.id} onClick={() => handleLogFood(item)} className="food-item">
                {item.name} - {item.calories} kcal - {item.protein}g protein
                <button className="edit-button" onClick={() => setEditId(item.id)}>✏</button>
                <button className="delete-button" onClick={() => handleDeleteFood(item.id)}>❌</button>
              </li>
            ))}
          </ul>

          <div className="food-input">
            <input type="text" placeholder="Food" value={newFood.name} onChange={(e) => setNewFood({ ...newFood, name: e.target.value })} />
            <input type="number" placeholder="kcal" value={newFood.calories} onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })} />
            <input type="number" placeholder="Protein (g)" value={newFood.protein} onChange={(e) => setNewFood({ ...newFood, protein: e.target.value })} />
            <button className="save-button" onClick={handleSaveFood}>{editId ? "Save" : "Add"}</button>
          </div>

          <button className="close-button" onClick={() => ref.current.close()}>Close</button>
        </div>
      </ActionSheet>
    </>
  );
};

export default Footer;
