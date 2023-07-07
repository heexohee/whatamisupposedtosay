import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;

// 전역 상태를 저장하고 관리하는 객체
// 이렇게 생성된 스토어는 Redux의 전역 상태 저장소로 사용되며, 
// 애플리케이션의 다양한 컴포넌트에서 상태를 읽고 업데이트할 수 있습니다.
