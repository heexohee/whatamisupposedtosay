import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id}>{todo.title} 
     <br/>
       
         </StTodo>
      ))}
     
    </StTodos>
  );
};

export default TodoListContainer;


// 스타일드 컴포넌트

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
