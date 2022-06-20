import React from "react";
import styles from "./WeeklyForecast.module.css";
import WeatherIcon from "./WeatherIcon";

const WeeklyForecast = ({ dailyData }) => {
  const today = new Date();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return today.getDate() === date.getDate() ? "TODAY" : days[date.getDay()];
  };

  return (
    <ul className={styles.list}>
      {dailyData.map((data) => (
        <li className={styles.item} key={data.dt}>
          <span>{getDay(data.dt)}</span>
          <span className={styles.icon}>
            {data.weather && (
              <WeatherIcon size={30} icon={data.weather[0].icon} />
            )}
            {data.humidity}%
          </span>
          <span>
            {data.temp.min.toFixed()}° / {data.temp.max.toFixed()}°
          </span>
        </li>
      ))}
    </ul>
  );
};

export default WeeklyForecast;
