import Field from "./Field.jsx";
import {useContext} from "react";
import {TasksContext} from "../context/TasksContext.jsx";

const SearchTaskForm = () => {
  const {
    setSearchQuery,
    searchQuery,
  } = useContext(TasksContext);

  return (
    <form className="todo__form"
    onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        id="search-task"
        label="Search Task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm