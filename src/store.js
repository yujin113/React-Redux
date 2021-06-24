import { createStore } from "redux";

export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
    // state를 복제하고 복제된 state에서 뒤에 추가되는 프로퍼티 값만 변형시키는 것
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// Redux tools 이용하기 위한 코드
