import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="todoTitle"
        className={styles.todoTitle}
        placeholder="Enter new todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
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
