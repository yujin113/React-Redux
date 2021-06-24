# React-Redux

Redux 없이 코드 작성하고, Redux 도입하면서 Redux의 장점과 편리함을 알기  
Redux 없이 코드를 작성했을 때는 컴포넌트 별로 props를 하나씩 차근차근 다 전달받아서 state를 바꿔야 했음  
그러나 Redux를 도입하면 depth가 아무리 깊어져도 변경할 컴포넌트에 바로 변경사항을 적용할 수 있음

1. store.js 작성  
   createStore 코드 작성

2. AddNumber.js 수정  
   input 태그의 onClick 속성에 store.dispatch 코드 추가  
   type을 INCREMENT로 하고, size을 전송

3. DisplayNumber.js 수정  
   store에서 getState()를 통해 number값을 state에 저장  
   -> store의 값이 바뀌었다고 해서 새로 render 되지 않음  
   -> store의 값이 변경됐다는 사실을 통보받아 state 값이 바뀌면 새로 render 되게 해야 함  
   store.subscribe()는 state의 데이터 값이 변경됐을 때 호출됨  
   -> store에서 getState()를 통해 number 값을 가져와서 setNumber로 state의 number 값을 변경시킨다
