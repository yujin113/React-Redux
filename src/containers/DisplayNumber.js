import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);
// DisplayNumber 컴포넌트를 wrapping한, 아래와 같은 컴포넌트가 만들어져서 export 되는 것

/*
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

export default Container; */
