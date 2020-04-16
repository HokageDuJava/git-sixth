import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "blue", "green", "yellow", "pink", "brown"];
  const randomColors = colors[Math.floor(Math.random() * 5)];
  const colorClass = randomColors + "-text";

  return (props) => {
    return (
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
