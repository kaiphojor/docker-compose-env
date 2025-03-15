import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [editing, setEditing] = useState(null);
  const apiUrl = 'http://localhost:5000';

  // TODO 목록 조회
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/todos`);
      setTodos(response.data.map(todo => ({ ...todo, showDetails: false })));
    } catch (error) {
      console.error('TODO 조회 오류:', error);
    }
  };

  // CREATE: TODO 생성
  const handleCreate = async () => {
    try {
      const newTodo = { title, description, dueDate };
      await axios.post(`${apiUrl}/todos`, newTodo);
      setTitle('');
      setDescription('');
      setDueDate(new Date());
      fetchTodos();
    } catch (error) {
      console.error('TODO 생성 오류:', error);
    }
  };

  // UPDATE: TODO 수정
  const handleUpdate = async (id) => {
    try {
      const updatedTodo = { title, description, dueDate, completed: editing.completed };
      await axios.put(`${apiUrl}/todos/${id}`, updatedTodo);
      setEditing(null);
      fetchTodos();
    } catch (error) {
      console.error('TODO 수정 오류:', error);
    }
  };

  // DELETE: TODO 삭제
  const handleDelete = async (id) => {
    if (window.confirm('이 TODO를 삭제하시겠습니까?')) {
      try {
        await axios.delete(`${apiUrl}/todos/${id}`);
        fetchTodos();
      } catch (error) {
        console.error('TODO 삭제 오류:', error);
      }
    }
  };

  // 수정 시작
  const startEditing = (todo) => {
    setEditing(todo);
    setTitle(todo.title);
    setDescription(todo.description || '');
    setDueDate(new Date(todo.dueDate));
  };

  // 세부사항 토글
  const toggleDetails = (id) => {
    setTodos(todos.map(todo =>
      todo._id === id ? { ...todo, showDetails: !todo.showDetails } : todo
    ));
  };

  return (
    <div>
      <h1>TODO 리스트</h1>

      {/* Create TODO */}
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="세부사항 (선택)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          minDate={new Date()}
        />
        <button onClick={handleCreate}>TODO 추가</button>
      </div>

      {/* Read TODO */}
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={startEditing}
        onToggleDetails={toggleDetails}
      />

      {/* Update TODO */}
      {editing && (
        <div>
          <h2>TODO 수정</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            minDate={new Date()}
          />
          <label>
            완료:
            <input
              type="checkbox"
              checked={editing.completed}
              onChange={(e) => setEditing({ ...editing, completed: e.target.checked })}
            />
          </label>
          <button onClick={() => handleUpdate(editing._id)}>저장</button>
          <button onClick={() => setEditing(null)}>취소</button>
        </div>
      )}
    </div>
  );
};

export default TodoApp;