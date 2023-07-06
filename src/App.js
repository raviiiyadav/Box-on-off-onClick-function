import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  const [square, setSquare] = useState(boxes);

  const toggle = (id) => {
    setSquare((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElemets = square.map((square) => (
    <Box toggle={toggle} key={square.id} id={square.id} on={square.on} />
  ));

  return <main>{squareElemets}</main>;
}

export default App;
