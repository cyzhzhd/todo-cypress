import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.todos.map((todo, index) => {
        return (
          <div className='todo-card-wrapper'>
            <TodoCard name={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
