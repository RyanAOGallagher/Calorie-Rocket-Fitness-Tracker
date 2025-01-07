import React, { useState } from "react";
import "./Progress.css"; // Import external CSS
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
  const [exercise, setExercise] = useState(0);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  // Clicking on Exercise Circle increases exercise count, updates calories & protein
  const increaseExercise = () => {
    if (exercise < 10) {
      setExercise(exercise + 1);
      setCalories(calories + 300); // Each exercise burns 300 kcal
      setProtein(protein + 20); // Each exercise contributes to 20g protein
    }
  };

  return (
    <div className="progress-container">
      {/* Exercise Progress (Clickable) */}
      <div className="small-progress clickable" onClick={increaseExercise}>
        <CircularProgressbar
          value={exercise}
          maxValue={10}
          text={`${exercise}/10`}
          styles={buildStyles({
            textSize: "14px",
            pathColor: "#00F9C7",
            textColor: "#333",
          })}
        />
        <p>Exercise</p>
      </div>

      {/* Calories Progress (Bigger in the Center) */}
      <div className="big-progress">
        <CircularProgressbar
          value={calories}
          maxValue={3000}
          text={`${calories} kcal`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: "#00F9C7",
            textColor: "#333",
          })}
        />
        <p>Calories</p>
      </div>

      {/* Protein Progress */}
      <div className="small-progress">
        <CircularProgressbar
          value={protein}
          maxValue={90}
          text={`${protein}g`}
          styles={buildStyles({
            textSize: "14px",
            pathColor: "#00F9C7",
            textColor: "#333",
          })}
        />
        <p>Protein</p>
      </div>
    </div>
  );
};

export default Progress;
