import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./App.module.css";
import axios from "axios";
import Search from "./components/Search";
import Main from "./components/Main";
import TempChart from "./components/TempChart";
import WeeklyForcast from "./components/WeeklyForecast";

const key = "";

const App = () => {
  const [data, setData] = useState({});
  const [cityInfo, setCityInfo] = useState({ name: "", lat: "", lon: "" });
  const message = useRef(null);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.lat}&lon=${cityInfo.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key}`;

  const setCity = useCallback((city) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;

    axios.get(url).then((response) => {
      if (response.data[0]) {
        setCityInfo((prevState) => ({
          ...prevState,
          name: city,
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        }));
      } else {
        showMessage();
      }
    });
  }, []);

  const showMessage = () => {
    message.current.classList.add("show");
    setTimeout(() => {
      message.current.classList.remove("show");
    }, 2000);
  };

  useEffect(() => setCity("busan"), [setCity]);
  useEffect(() => {
    if (cityInfo.lat && cityInfo.lon) {
      axios.get(url).then((response) => setData(response.data));
    }
  }, [cityInfo.lat, cityInfo.lon, url]);

  return (
    <div className={styles.app}>
      <Search setCity={setCity} />
      <p className={styles.message} ref={message}>
        Please enter the correct city name
      </p>
      <div className={styles.container}>
        <Main cityName={cityInfo.name} todayData={data.current} />
        {data.daily && (
          <>
            <TempChart dailyData={data.daily.slice(1)} />
            <WeeklyForcast dailyData={data.daily} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
