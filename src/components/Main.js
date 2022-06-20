import React from "react";
import styles from "./Main.module.css";
import WeatherIcon from "./WeatherIcon";

const Main = ({ cityName, todayData }) => {
  return (
    <div className={styles.main}>
      <p className={styles.name}>{cityName}</p>
      {todayData && (
        <>
          <p className={styles.temp}>{todayData.temp.toFixed()}°</p>
          {todayData.weather && (
            <p className={styles.description}>
              {todayData.weather[0].description}
            </p>
          )}
          <div className={styles.detail}>
            <p>체감 {todayData.feels_like.toFixed(1)}°</p>
            <p>습도 {todayData.humidity}%</p>
            <p>바람 {(todayData.wind_speed * 0.44704).toFixed(1)}m/s</p>
          </div>
          {todayData.weather && (
            <div className={styles.icon}>
              <WeatherIcon size={150} icon={todayData.weather[0].icon} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Main;
