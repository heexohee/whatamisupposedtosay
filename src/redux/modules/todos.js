// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return { 
    type: ADD_TODO, 
    payload 
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) =>{
  return {
    type : DELETE_TODO,
    payload ,
    
  };
}

// initial State 초기값 선언
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
    },
  ],
};

// Reducer 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

      case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };


      
    default:
      return state;
  }
};

export default todos;
