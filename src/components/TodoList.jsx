import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="타입스크립트" done={true} />
      <TodoItem text="Vue.js" done={true} />
      <TodoItem text="React.js" done={false} />
      <TodoItem text="Next.js" done={false} />
    </TodoListBlock>
  );
}