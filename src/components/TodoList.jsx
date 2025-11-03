import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonCLick,
    onTaskCompleteChange
  } = props;
  const hasTasks = true

  if(!hasTasks) {
    return  <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">

      {tasks.map(({id, title, isDone}) => (
        <TodoItem className='todo__item'
        key={id}
        onDeleteTaskButtonCLick={onDeleteTaskButtonCLick}
        id={id}
        title={title}
        isDone={isDone}
        onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}

    </ul>
  )

}

export default TodoList