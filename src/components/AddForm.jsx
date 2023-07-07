import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

import uuid from 'react-uuid';

// 디스패치(Dispatch): 액션을 발생시키는 함수로, 
// 스토어에 액션을 전달하여 상태 변경을 트리거합니다.

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContents] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch( // dispatch 함수를 사용하여 addTodo 액션을 디스패치.
      addTodo({
        id: uuid(),
        title
        
      })
    );
  };

  

  return (
  
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todos의 제목을 입력하세요</label>
        <StInput
          type="text"
          name="title"
          value={todos.title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 40px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 30px;
  width: 300px;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;
