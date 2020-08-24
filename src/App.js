import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import sunny from "./assets/images/sunny.png";
import wind from "./assets/images/wind.png";
import cloudy from "./assets/images/cloudy.png";
import rain from "./assets/images/rain.png";
import shiny from "./assets/images/shiny.png";
import tornado from "./assets/images/tornado.png";
import snow from "./assets/images/snow.png";
import thunder from "./assets/images/thunder.png";
import iconSunny from "./assets/images/icon-sunny.png";
import iconShiny from "./assets/images/icon-shiny.png";
import iconCloud from "./assets/images/icon-cloudy.png";
import iconSnow from "./assets/images/icon-snow.png";
import iconRain from "./assets/images/icon-rain.png";
import iconThunder from "./assets/images/icon-thunder.png";
import moment from "moment";
import Card from "./components/Card/Card";
import Today from "./components/Today/Today";
import WeekDay from "./components/WeekDay/WeekDay";
import TextScroll from "./components/TextScroll/TextScroll";
import WeatherService from "./service/WeatherService";

function App() {
  const [city, setCity] = useState(null);
  const [weekInfos, setWeekInfos] = useState([]);
  const [todayData, setTodayData] = useState(null);

  const images = [sunny, wind, cloudy, rain, shiny, tornado, snow, thunder];
  const icons = [
    iconSunny,
    iconShiny,
    iconCloud,
    iconSnow,
    iconRain,
    iconThunder,
  ];
  const today = new Date();
  const cities = [
    {
      name: "Toronto",
      lat: 43.7001,
      lon: -79.4163,
    },
    {
      name: "Montreal",
      lat: 45.5088,
      lon: -73.5878,
    },
    {
      name: "Calgary",
      lat: 51.0501,
      lon: -114.0853,
    },
  ];

  useEffect(() => {
    if (city == null) {
      setCity(cities[0]);
    } else {
      const getWeatherInfo = async (lat, lon) => {
        const forcastData = await WeatherService.getWeather(lat, lon);
        const weekInfoData = forcastData.list.map((data, index) => ({
          date: moment().add(index, "d"),
          info: data,
        }));
        setWeekInfos(weekInfoData);
        setTodayData(weekInfoData[0].info);
      };
      getWeatherInfo(city.lat, city.lon);
    }
  }, [city]);

  return (
    <div className="App">
      <div className="row">
        <div className="col col-xs-12 mb-2">
          <TextScroll
            items={cities}
            text="name"
            selected={city}
            onClick={(city) => setCity(city)}
          />
        </div>
      </div>
      <div className="row">
        {images.map((image, index) => (
          <div className="col col-xs-12 col-sm-6 col-md-3" key={index}>
            <Card background={image} className="top-card" />
          </div>
        ))}
      </div>
      <div className="row mt-2">
        <div className="col col-xs-12 col-md-5 flex-center">
          <div className="weather-icony">
            <h2 className="text-white text-center">The Weather</h2>
            <div className="row">
              {icons.map((icon, index) => (
                <div className="col col-sm-4 flex-center" key={index}>
                  <img src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-7 flex-center">
          {city && todayData && (
            <Today date={today} city={city.name} info={todayData} />
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col col-sm-12 flex flex-horizontal">
          {weekInfos.map((weekInfo, index) => (
            <div className="flex-even sp-1" key={index}>
              <WeekDay date={weekInfo.date} info={weekInfo.info} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
