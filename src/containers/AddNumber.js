import React from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";

function Container() {
  return (
    <AddNumber
      onClick={size => {
        store.dispatch({ type: "INCREMENT", size });
      }}
    />
  );
}

export default Container;
