import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  nextTodoId: 1,
  todos: [],
  visibilityFilter: "all",
};

export default function reduceTodos(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        nextTodoId: state.nextTodoId + 1,
        todos: [
          ...state.todos,
          {
            completed: false,
            id: state.nextTodoId,
            text: action.payload.text,
          },
        ],
      };

    case TOGGLE_TODO:
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          {
            ...state.todos[todoIndex],
            completed: !state.todos[todoIndex].completed,
          },
          ...state.todos.slice(todoIndex + 1),
        ],
      };

    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload.filter,
      };

    default:
      return state;
  }
}
