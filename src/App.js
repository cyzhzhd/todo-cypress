import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { name: input, done: false }]);
    setInput('');
  };

  return (
    <div className='App'>
      <div>
        <div>무슨 일을 해야할까요?</div>
        <div>
          <input
            value={input}
            type='input'
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>추가</button>
        </div>
      </div>

      <div>
        <div>할일 목록</div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
