import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";


// 애플리케이션 렌더링: ReactDOM.render 또는 ReactDOM.createRoot를 사용하여 
// 애플리케이션의 루트 컴포넌트를 렌더링

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 루트 컴포넌트를 Provider 컴포넌트로 감싸기:
// react-redux 라이브러리에서 제공하는 Provider 컴포넌트를 사용하여 
// 전체 컴포넌트 트리에 Redux 스토어를 제공합니다. 
// 루트 컴포넌트 (App이라 가정)를 Provider 컴포넌트로 감싸고 
// Redux 스토어를 prop으로 전달합니다.
//----
// index.js 파일은 Redux 애플리케이션을 위한 기반을 설정합니다. 
// 스토어를 구성하고 컴포넌트에 제공함으로써 전역 상태에 접근하고 
// 업데이트할 수 있도록 합니다.