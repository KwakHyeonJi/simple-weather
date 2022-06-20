import React from "react";
import {
  UilSun,
  UilCloud,
  UilClouds,
  UilCloudSun,
  UilCloudSunRain,
  UilCloudMoon,
  UilCloudMoonRain,
  UilCloudShowersHeavy,
  UilMoon,
  UilBolt,
  UilWater,
  UilSnowFlake,
} from "@iconscout/react-unicons";

const WeatherIcon = ({ size, icon }) => {
  switch (icon) {
    case "01d":
      return <UilSun size={size} />;
    case "01n":
      return <UilMoon size={size} />;
    case "02d":
      return <UilCloudSun size={size} />;
    case "02n":
      return <UilCloudMoon size={size} />;
    case "03d":
    case "03n":
      return <UilCloud size={size} />;
    case "04d":
    case "04n":
      return <UilClouds size={size} />;
    case "09d":
    case "09n":
      return <UilCloudShowersHeavy size={size} />;
    case "10d":
      return <UilCloudSunRain size={size} />;
    case "10n":
      return <UilCloudMoonRain size={size} />;
    case "11d":
    case "11n":
      return <UilBolt size={size} />;
    case "13d":
    case "13n":
      return <UilSnowFlake size={size} />;
    case "50d":
    case "50n":
      return <UilWater size={size} />;
    default:
      return null;
  }
};

export default React.memo(WeatherIcon);
