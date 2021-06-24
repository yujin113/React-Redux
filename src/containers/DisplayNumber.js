import DisplayNumber from "../components/DisplayNumber";
import React, { useState, useEffect } from "react";
import store from "../store";

function Container() {
  const [number, setNumber] = useState(store.getState().number);

  useEffect(() => {
    store.subscribe(() => {
      setNumber(store.getState().number);
    });
  });

  return <DisplayNumber number={number} />;
}

export default Container;
