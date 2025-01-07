import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon
import "./Header.css"; // Import external CSS file

const Header = () => {
  // Get today's date
  const getFormattedDate = (date) => date.toISOString().split("T")[0];

  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Move date back one day
  const previousDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  // Move date forward one day
  const nextDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  return (
    <header className="header">
      <button className="nav-button" onClick={previousDay}>⬅</button>
      <h2 className="date-text">{getFormattedDate(selectedDate)}</h2>
      <button className="nav-button" onClick={nextDay}>➡</button>
      {/* <div className="profile-icon">
        <FaUserCircle size={42} />
      </div> */}
    </header>
  );
};

export default Header;
