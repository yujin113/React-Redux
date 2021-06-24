import AddNumber from "../components/AddNumber";
import store from "../store";

function container() {
  return (
    <AddNumber
      onClick={size => {
        store.dispatch({ type: "INCREMENT", size });
      }}
    />
  );
}

export default container;
