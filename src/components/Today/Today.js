import React from "react";
import Card from "../Card/Card";
import moment from "moment";
import "./style.less";

const Today = ({ date, city, info }) => {
  const weekday = moment(date).format("dddd");
  const day = moment(date).format("MMM, D");
  return (
    <Card>
      <div className="contain">
        <p>
          <span>
            {weekday}
            <br />
            {day}
          </span>
        </p>
        <p className="text-big">
          {info.temperature > 0
            ? `+${info.temperature}`
            : `-${info.temperature}`}
          <span>&#8451;</span>
        </p>
        <p>{info.text}</p>
        <span class="today-text-city">{city}</span>
        <img className="todaycard-background" src={info.icon} />
      </div>
    </Card>
  );
};

export default Today;
