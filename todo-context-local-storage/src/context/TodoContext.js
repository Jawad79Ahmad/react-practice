import { createContext, useContext } from "react";

export const TodoContext = createContext({
  items: [],
  createItem: () => {},
  updateItem: () => {},
  toggleItemCompleted: () => {},
  deleteItem: () => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
