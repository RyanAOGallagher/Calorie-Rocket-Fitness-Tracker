import React, { useRef } from "react";
import ActionSheet from "actionsheet-react";
import "./Footer.css"; // Import external CSS

const Footer = () => {
  const ref = useRef();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  };

  return (
    <>
      {/* Footer Bar */}
      <footer className="footer">
        <button className="footer-button" onClick={handleOpen}>+</button>
      </footer>

      {/* ActionSheet for Food List */}
      <ActionSheet ref={ref}>
        <div className="food-list-content">
          <h2>Available Foods</h2>
          <ul>
            <li>Chicken Breast - 200 kcal - 30g protein</li>
            <li>Rice - 150 kcal - 3g protein</li>
            <li>Broccoli - 50 kcal - 5g protein</li>
            <li>Protein Shake - 120 kcal - 25g protein</li>
          </ul>
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      </ActionSheet>
    </>
  );
};

export default Footer;
