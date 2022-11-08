import "./Chart.css";
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
import { Line } from "react-chartjs-2";

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: "rgba(192, 192, 192, 0.5)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["", "", "", "", "", "", ""];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((elem, idx) => idx),
        borderColor: "white",
        pointBorderColor: "#FF9528",
        pointBackgroundColor: "#FF9528",
        pointHitRadius: 28,
        pointBorderWidth: 10,
        pointHoverBorderWidth: 15,
      },
    ],
  };
  return <Line responsive options={options} data={data} />;
};

export default Chart;
