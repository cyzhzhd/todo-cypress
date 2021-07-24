import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';

const TodoList = (props) => {
  const removeItem = (index) => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  return (
    <div className='todo-list'>
      {props.todos.map((todo, index) => {
        return (
          <div className='todo-card-wrapper'>
            <TodoCard name={todo} />
            <button onClick={() => removeItem(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
