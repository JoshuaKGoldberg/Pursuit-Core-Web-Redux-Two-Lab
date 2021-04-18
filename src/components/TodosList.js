import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../actions/todoActions";

import { selectTodos, selectVisibilityFilter } from "../selectors/todoSelectors";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const visibilityFilter = useSelector(selectVisibilityFilter);

  const filter =
    visibilityFilter === "all"
      ? () => true
      : (todo) => todo.completed === (visibilityFilter === "completed");

  return (
    <ul>
      {todos.filter(filter).map((todo) => (
        <li key={todo.id}>
          <button
            className={todo.completed ? "todo completed" : "todo"}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
