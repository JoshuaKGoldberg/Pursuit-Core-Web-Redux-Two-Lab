import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

const TodoApp = () => {
  return (
    <>
      <TodoForm />
      <TodosList />
      <TodoFilter />
    </>
  );
};

export default TodoApp;
