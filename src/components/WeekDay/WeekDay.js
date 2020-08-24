import React from "react";

import sunny from "../../assets/images/sunny.png";
import wind from "../../assets/images/wind.png";
import cloudy from "../../assets/images/cloudy.png";
import rain from "../../assets/images/rain.png";
import shiny from "../../assets/images/shiny.png";
import tornado from "../../assets/images/tornado.png";
import snow from "../../assets/images/snow.png";
import thunder from "../../assets/images/thunder.png";

const WeekDay = ({ date, info }) => {
  const weekDayName = date.format("ddd");
  info.main.temp = parseInt(info.main.temp);
  return (
    <div className="card pd-2 text-center">
      <p className="mb-0">{weekDayName}</p>
      <img src={sunny} />
      <p className="mb-0">
        {info.main.temp > 0 ? `+${info.main.temp}` : `-${info.main.temp}`}
        <span>&#8451;</span>
      </p>
    </div>
  );
};

export default WeekDay;
