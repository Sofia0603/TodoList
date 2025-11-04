import {memo} from 'react'
import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {

  const {
    tasks = [],
    onDeleteTaskButtonCLick,
    onTaskCompleteChange,
    filteredTasks,
    firstIncompleteTaskId,
    firstIncompleteTaskRef
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if(!hasTasks) {
    return  <div className="todo__empty-message">There are no tasks yet </div>
  }

  if(hasTasks && isEmptyFilteredTasks) {
    return  <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className="todo__list">

      {(filteredTasks ?? tasks).map(({id, title, isDone}) => (
        <TodoItem className='todo__item'
        key={id}
        ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
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

export default memo(TodoList)