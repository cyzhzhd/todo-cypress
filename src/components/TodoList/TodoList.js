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
    <div
      className='todo-list'
      data-testid='8063f5be-ecfb-11eb-9a03-0242ac130003'
    >
      {props.todos.map((todo, index) => {
        if (props.filtered && todo.done) {
          return false;
        }
        return (
          <div
            className='todo-card-wrapper'
            data-testid={`8063f6ae-ecfb-11eb-9a03-0242ac130003${todo.name}`}
          >
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
