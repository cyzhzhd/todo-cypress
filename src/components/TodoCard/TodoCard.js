import './TodoCard.css';

const TodoCard = (props) => {
  return <div className='todo-card'>{props.name}</div>;
};

export default TodoCard;
