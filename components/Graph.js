import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  aspectRatio: 1.1,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },

  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,

      grid: {
        display: false,
      },
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120, 140, 140, 180, 170, 200, 203],
      borderColor: "#29524A",
      backgroundColor: "#",
      borderWidth: 3,
      pointRadius: 0,
      fill: ""
    },
  ],
};

function Graph() {
  return (
    <div className="">
      <Line options={options} data={data} height={null} width={null} />
    </div>
  );
}

export default Graph;
