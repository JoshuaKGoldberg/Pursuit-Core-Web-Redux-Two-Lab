import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../actions/todoActions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      return;
    }

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(event) => setText(event.target.value)} value={text} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
