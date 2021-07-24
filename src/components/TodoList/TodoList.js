import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';

const TodoList = (props) => {
  const toggleDone = (index) => {
    const newTodos = [...props.todos];
    newTodos[index].done = !newTodos[index].done;
    props.setTodos(newTodos);
  };
  const removeItem = (index) => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  return (
    <div className='todo-list'>
      {props.todos.map((todo, index) => {
        if (props.filtered && todo.done) {
          return false;
        }
        return (
          <div className='todo-card-wrapper'>
            <TodoCard name={todo.name} done={todo.done} />
            <button onClick={() => toggleDone(index)}>done</button>
            <button onClick={() => removeItem(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
