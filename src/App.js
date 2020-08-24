import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./components/Card/Card";
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
import Today from "./components/Today/Today";

function App() {
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
  const city = "Your City";
  const info = {
    temperature: 17,
    text: "partly cloudy",
    icon: iconSunny,
  };
  
  return (
    <div className="App">
      <div className="row">
        {images.map((image, index) => (
          <div className="col col-sm-6 col-md-3" key={index}>
            <Card background={image} className="top-card" />
          </div>
        ))}
      </div>
      <div className="row mt-10">
        <div className="col col-sm-12 col-md-5 flex-center">
          <div className="weather-icony">
            <h2 className="text-white text-center">The Weather</h2>
            <div className="row">
              {icons.map((icon, index) => (
                <div className="col col-sm-4 flex-center" key={index}>
                  <img src={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-7 flex-center">
          <Today date={today} city={city} info={info} />
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-12">
          
        </div>
      </div>
    </div>
  );
}

export default App;
