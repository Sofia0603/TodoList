import Field from "./Field.jsx";

const SearchTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search Task"
        type="search"
      />
    </form>
  )
}

export default SearchTaskForm