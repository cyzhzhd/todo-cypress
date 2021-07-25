import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: input, done: false }]);
    setInput('');
  };

  return (
    <div className='App'>
      <div>
        <div>무슨 일을 해야할까요?</div>
        <form data-testid='8063f348-ecfb-11eb-9a03-0242ac130003'>
          <input
            value={input}
            type='input'
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>추가</button>
        </form>
      </div>

      <div className='filter'>
        <input
          type='checkbox'
          checked={filtered}
          onChange={() => setFiltered(!filtered)}
        />
        <div>끝나지 않은 목록만 보기</div>
      </div>

      <div>
        <div>할일 목록</div>
        <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
      </div>
    </div>
  );
}

export default App;
