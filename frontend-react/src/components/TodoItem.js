import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit, onToggleDetails }) => {
  return (
    <li>
      <h2 onClick={() => onToggleDetails(todo._id)}>
        {todo.title}
      </h2>
      <p>마감일: {new Date(todo.dueDate).toLocaleDateString()}</p>
      <p>완료: {todo.completed ? '예' : '아니오'}</p>
      {todo.showDetails && <p>세부사항: {todo.description}</p>}
      <button onClick={() => onEdit(todo)}>수정</button>
      <button onClick={() => onDelete(todo._id)}>삭제</button>
    </li>
  );
};

export default TodoItem;