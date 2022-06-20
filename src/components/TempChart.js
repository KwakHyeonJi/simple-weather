import React from "react";
import styles from "./TempChart.module.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DailyChart = ({ dailyData }) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date();
  const today = date.getDay();

  const chartData = {
    labels: [...days.splice(today + 1), ...days],
    datasets: [
      {
        data: dailyData.map((obj) =>
          ((obj.temp.min + obj.temp.max) / 2).toFixed()
        ),
        fill: false,
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.4)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    spanGaps: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        color: "#f8f8f8",
        align: "start",
        labels: {
          title: {
            padding: 10,
            font: {
              family: "Outfit",
              size: 20,
              weight: 200,
            },
          },
        },
        formatter: function (value) {
          return value + "°";
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#f8f8f8",
          font: {
            family: "Outfit",
            size: 20,
            weight: 200,
          },
        },
        position: "top",
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        afterDataLimits: (scale) => {
          scale.max = scale.max * 1.001;
          scale.min = scale.min * 0.95;
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Line
        data={chartData}
        options={options}
        plugins={[ChartDataLabels]}
        height={"100%"}
      />
    </div>
  );
};

export default DailyChart;
