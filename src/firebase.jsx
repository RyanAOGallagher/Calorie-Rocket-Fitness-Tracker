import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore, collection, doc, setDoc, getDocs, updateDoc, deleteDoc 
} from "firebase/firestore";

// 🔹 Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyArZecXW5vgjRXxxKFfmYAo3qMl71K3Hjw",
  authDomain: "rocketgirls101-569fb.firebaseapp.com",
  projectId: "rocketgirls101-569fb",
  storageBucket: "rocketgirls101-569fb.firebasestorage.app",
  messagingSenderId: "458983104981",
  appId: "1:458983104981:web:9066e363b1a5dd4fad9d5c",
  measurementId: "G-0X2K3257G2"
};

// 🔹 Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/** ───────────────────────────────
 *  📌 FOOD DATABASE FUNCTIONS
 *  (Manage main food list)
 *  ───────────────────────────────
 */

// 🔹 Fetch all food items from the database
const fetchFoodItems = async () => {
  const querySnapshot = await getDocs(collection(db, "foodItems"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 🔹 Add a new food item to the food database
const addFoodItem = async (food) => {
  const foodDoc = doc(collection(db, "foodItems"));
  await setDoc(foodDoc, food);
};

// 🔹 Update an existing food item
const updateFoodItem = async (id, food) => {
  const foodDoc = doc(db, "foodItems", id);
  await updateDoc(foodDoc, food);
};

// 🔹 Delete a food item from the database
const deleteFoodItem = async (id) => {
  await deleteDoc(doc(db, "foodItems", id));
};

/** ───────────────────────────────
 *  📌 DAILY FOOD LOG FUNCTIONS
 *  (Log food by date)
 *  ───────────────────────────────
 */

// 🔹 Add a food item to the daily log for the current date
const addFoodToDailyLog = async (food) => {
  const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
  const foodDoc = doc(collection(db, "foodLogs", today, "items")); // Subcollection per date
  await setDoc(foodDoc, food);
};

// 🔹 Fetch logged food items for a specific date
const fetchDailyFoodLog = async (date) => {
  const querySnapshot = await getDocs(collection(db, "foodLogs", date, "items"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 🔹 Delete a food item from a specific day's log
const deleteFoodFromDailyLog = async (date, id) => {
  await deleteDoc(doc(db, "foodLogs", date, "items", id));
};

// 🔹 Export All Firebase Utilities
export { 
  auth, db,
  fetchFoodItems, addFoodItem, updateFoodItem, deleteFoodItem, 
  addFoodToDailyLog, fetchDailyFoodLog, deleteFoodFromDailyLog 
};
