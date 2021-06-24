import React, { useState, useEffect } from "react";
import store from "../store";

function DisplayNumber() {
  const [number, setNumber] = useState(store.getState().number);

  useEffect(() => {
    store.subscribe(() => {
      setNumber(store.getState().number);
    });
  }, [number]);

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
}

export default DisplayNumber;
