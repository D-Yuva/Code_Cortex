import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Result = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Receive data passed from Predict page
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data) {
      // Extract the specific fields you want to display (e.g., RT and kW_RT)
      const labels = data.map((row) => row["RT"]); // Assuming "RT" is one field
      const efficiencyData = data.map((row) => row["kW_RT"]); // Assuming "kW_RT" is the other field

      setChartData({
        labels,
        datasets: [
          {
            label: "Plant Efficiency (kW/RT)",
            data: efficiencyData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Efficiency Prediction Results</h1>
      <p className="text-gray-600 mb-6">
        The following graph shows the efficiency of the chiller plant based on the uploaded data.
      </p>

      {chartData && chartData.labels ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Chiller Plant Efficiency (kW/RT) vs RT",
              },
            },
          }}
        />
      ) : (
        <p className="text-gray-600">Loading chart data...</p>
      )}
    </div>
  );
};

export default Result;
