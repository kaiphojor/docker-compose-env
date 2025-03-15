import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit, onToggleDetails }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleDetails={onToggleDetails}
        />
      ))}
    </ul>
  );
};

export default TodoList;