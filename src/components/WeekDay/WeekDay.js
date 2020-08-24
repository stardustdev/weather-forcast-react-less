import React from "react";
import Util from "../../service/Util";

const WeekDay = ({ date, info }) => {
  const weekDayName = date.format("ddd");
  info.main.temp = parseInt(info.main.temp);
  return (
    <div className="card pd-2 text-center">
      <p className="transform-upper mb-0">{weekDayName}</p>
      <img src={Util.getIconWithWeather(info.weather[0].main)} />
      <p className="mb-0">
        {info.main.temp > 0 ? `+${info.main.temp}` : `-${info.main.temp}`}
        <span>&#8451;</span>
      </p>
    </div>
  );
};

export default WeekDay;
