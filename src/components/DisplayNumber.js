import React from "react";

function DisplayNumber({ number }) {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
}

export default DisplayNumber;
