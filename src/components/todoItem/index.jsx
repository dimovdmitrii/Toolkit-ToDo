import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../redux/slices/todoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.todoItem}>
      <p>{title}</p>
      <div>
        <button
          className={styles.toggleCompleteBtn}
          onClick={() => dispatch(completeTodo(id))}
        >
          {completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className={styles.deleteBtn}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
