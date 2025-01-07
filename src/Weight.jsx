import React, { useState } from "react";
import "./Weight.css"; // Import external CSS file

const Weight = () => {
  const [weight, setWeight] = useState("");
  const [finalWeight, setFinalWeight] = useState(null);

  // Handle Enter Key to Save Weight
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && weight.trim() !== "") {
      setFinalWeight(weight);
      event.preventDefault();
    }
  };

  return (
    <div className="weight-container">
      <div className="weight-box">
        <div className="weight-content">
          {finalWeight !== null ? (
            <div className="weight-final">
              <span className="weight-number">{finalWeight}</span>
              <span className="weight-unit"> kg</span>
            </div>
          ) : (
            <div className="weight-input-wrapper">
              <input
                type="number"
                name="weight"
                placeholder="--"
                required
                step="0.1"
                className="weight-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <span className="weight-unit"> kg</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weight;
