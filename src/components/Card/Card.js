import React from "react";
import "./style.less";

const Card = ({ className, background, children }) => {
  return (
    <div className={className + " card"}>
      {background && <img src={background} />}
      {children}
    </div>
  );
};

export default Card;
