import React from "react";
import Card from "../Card/Card";
import moment from "moment";
import Util from "../../service/Util";
import "./style.less";

const Today = ({ date, city, info }) => {
  const weekday = moment(date).format("dddd");
  const day = moment(date).format("MMM, D");
  info.main.temp = parseInt(info.main.temp);

  return (
    <Card>
      {info && (
        <div className="contain">
          <p>
            <span>
              {weekday}
              <br />
              {day}
            </span>
          </p>
          <p className="text-big">
            {info.main.temp > 0 ? `+${info.main.temp}` : `-${info.main.temp}`}
            <span className="text-big">&#8451;</span>
          </p>
          <p className="mb-0">{info.weather[0].description}</p>
          <span className="today-text-city">{city}</span>
          <img
            className="todaycard-background"
            src={Util.getIconWithWeather(info.weather[0].main)}
            alt=""
          />
        </div>
      )}
    </Card>
  );
};

export default Today;
