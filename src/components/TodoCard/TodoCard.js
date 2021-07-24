import './TodoCard.css';

const TodoCard = (props) => {
  return (
    <div className={['todo-card', props.done ? 'done' : ''].join(' ')}>
      {props.name}
    </div>
  );
};

export default TodoCard;
