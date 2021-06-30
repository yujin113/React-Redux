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

### Redux에 종속된 기능 제거

현재 AddNumber 컴포넌트는 재사용하지 못함  
→ Wrapping  
→ AddNumber 컴포넌트를 감싸는 새로운 컴포넌트를 만들고, 그 컴포넌트는 Redux의 store을 핸들링하는 컴포넌트로 만든다  
→ AddNumber 컴포넌트는 redux를 사용하지 않는 코드로 만든다

AddNumber 컴포넌트는 `presentational component`  
AddNumber 컴포넌트를 감싸서 redux 작업을 실질적으로 처리하는 컴포넌트는 `Container component`

1. containers 폴더 안에 AddNumber.js 작성  
   redux 관련 작업 처리  
   기존의 components/AddNumber.js는 화면에 무언가를 표시하는 것에 집중하는 presentational component가 됨

2. AddNumberRoot.js 수정  
   AddNumber을 컨테이너 폴더 안의 AddNumber로 교체

3. AddNumber.js 수정  
   store.dispatch 코드를 containers/AddNumber.js로 옮기고 AddNumber는 화면에 집중하게 함

container component를 만들어서 그것이 redux와 상호작용하게 만듦  
그 밑에 있는 AddNumber는 redux의 기능을 도려내고 부품으로써 가치를 가진 component로 변경함

DisplayNumber도 위와 똑같이 wrapping하여 수정!

### react-redux 적용하기

react-redux를 도입하면 container component를 쉽게 만들 수 있다

`connect()`를 실행하면 리턴값이 함수고, 리턴된 함수를 다시 실행하는 것을 통해 만들어진 값을 export한다

→ 수동으로 했었던 wrapping component를 만드는 것과 똑같은 역할. wrapping component가 리턴되게 될 것

→ DisplayNumberRoot에서 전달한 props를 DisplayNumber로 자동 전달해줌 (따로 코드를 작성해서 넘겨주지 않아도 됨)

```jsx
connect(mapStateToProps, mapDispatchToProps)() { }
```

`mapStateToProps`는 redux의 state를 react의 props로 연결시켜주는 역할

→ redux에서 store의 값이 변경될 때마다 함수 호출되도록 약속되어 있음

→ 호출될 때마다 store의 state 값이 인자로 전달됨

→ connect에서 return 하는 컴포넌트에 들어갈 {props 이름 : 공급될 값} 전달

`mapDispatchToProps`는 redux의 dispatch를 react의 props로 연결시켜주는 역할

→ 호출될 때 dispatch를 인자로 받아 store.dispatch API를 공급해줌

→ 따로 store을 import 할 필요 없다
