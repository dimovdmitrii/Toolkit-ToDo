import styles from "./styles.module.css";

function TodoForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name="todoTitle"
        className={styles.todoTitle}
        placeholder="Enter new todo"
      />
      <input
        type="submit"
        value={"Add Todo"}
        className={styles.submitTodoBtn}
      />
    </form>
  );
}

export default TodoForm;
