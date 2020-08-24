import React, { useEffect, useState } from "react";
import "./style.less";

const TextScroll = ({ items, text, selected, onClick }) => {
  const [selectedName, setSelectedName] = useState(
    selected ? selected.name : ""
  );
  useEffect(() => {
    if (selected) {
      setSelectedName(selected.name);
    }
  }, [selected]);

  return (
    <div className="ts-horizontal">
      {items.map((item, index) => (
        <span
          className={`ts-item ${item.name === selectedName ? "selected" : ""}`}
          key={index}
          onClick={() => onClick(item)}
        >
          {item[text]}
        </span>
      ))}
    </div>
  );
};

export default TextScroll;
