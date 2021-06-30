import React from "react";

function DisplayNumber({ number, unit }) {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
      {unit}
    </div>
  );
}

export default DisplayNumber;
