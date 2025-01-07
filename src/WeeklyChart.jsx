import React, { useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import "./WeeklyChart.css"; // Import styles

const WeeklyChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Calories",
        data: [2200, 2000, 2100, 1900, 2300, 2500, 2200], 
      },
      
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
            show: false, // Hide toolbar
          },
       
      },
      colors: ["#00F9C7"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    },
  });

  return (
    <div className="chart-container">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default WeeklyChart;
