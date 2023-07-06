import React, { useState } from "react";
import "./style.css";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      onClick={() => props.toggle(props.id)}
      style={styles}
      className="box"
    ></div>
  );
};

export default Box;
