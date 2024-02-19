import {createContext, useContext} from "react";

export const TodoContext = createContext({
  todos: [ // default values 
    {
      id: 1,
      todo: " Todo msg ",
      completed: false,
    }
  ],
  addTodo : (todo) => {},  // functionalities 
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
})


export const UseTodo = () => {
  return useContext(TodoContext);// whenever we use useContext we need to give a context, of what and whom we are talking about. 
} 
export const TodoProvider = TodoContext.Provider