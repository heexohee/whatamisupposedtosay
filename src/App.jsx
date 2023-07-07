import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import AddForm from "./components/AddForm";
import styled from "styled-components";


const App = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;


// 루트 컴포넌트, 최상위 컴포넌트

// App 컴포넌트는 애플리케이션의 레이아웃을 정의하고, 
// 다른 컴포넌트를 조합하여 화면을 구성합니다. 
// 이 파일은 전체 애플리케이션의 진입점이 되며, 
// index.js 파일에서 App 컴포넌트를 렌더링하여 화면에 표시됩니다.
// 따라서, App.js 파일은 React 애플리케이션의 루트 컴포넌트로서 
// 애플리케이션의 구조와 동작을 정의하는 역할을 합니다.