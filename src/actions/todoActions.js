import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
  payload: { text },
  type: ADD_TODO,
});

export const setVisibilityFilter = (filter) => ({
  payload: { filter },
  type: SET_VISIBILITY_FILTER,
});

export const toggleTodo = (id) => ({
  payload: { id },
  type: TOGGLE_TODO,
});
