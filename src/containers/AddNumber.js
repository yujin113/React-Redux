import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: size => {
      dispatch({ type: "INCREMENT", size });
    },
  };
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/*
import React from "react";
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
*/
