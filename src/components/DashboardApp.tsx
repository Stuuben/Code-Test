import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { gameData } from "./DashboardData";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export const DashboardApp = () => {
  const lableDate = [...new Set(gameData.map((data) => data.date))];

  const leaugeOfLegendsData = gameData
    .filter((data) => data.game === "League of Legends")
    .map((data) => data.activeUsers);

  const mineCraftData = gameData
    .filter((data) => data.game === "Minecraft")
    .map((data) => data.activeUsers);

  const data = {
    labels: lableDate,
    datasets: [
      {
        label: "Leauge of Legends",
        data: leaugeOfLegendsData,
        backgroundColor: "aqua",
        borderColor: "blue",
        pointBorderColor: "yellow",
        tension: 0.2,
      },

      {
        label: "Minecraft",
        data: mineCraftData,
        backgroundColor: "lightgreen",
        borderColor: "green",
        pointBorderColor: "green",
        tension: 0.2,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: true,
    },
  };
  return (
    <>
      <h2>Dashboard</h2>
      <div className="chart-wrapper">
        <h3>User Activity</h3>
        <div>
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </>
  );
};
