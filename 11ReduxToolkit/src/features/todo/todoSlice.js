import { createSlice, nanoid } from "@reduxjs/toolkit";

// nano id generates unique id 

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    }
  ]
}
// Slice is just a higher function of Slice 

// const sayHello = () => {
//   console.log("say hello");
// } we can declare the function inside the reducers also 

export const todoSlice = createSlice({
  name: 'todo', // A name used in the reducer, to set up key constant
  initialState,
  reducers: { // state gives the value or acces the intitialState, actions  are dispatched with this action creator in simple sense values are given by action 
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => { // state => current state, action => data
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)  
    },
    updateTodo: (state, action) => {
      const {id, newText} = action.payload;
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      if(todoToUpdate){
        todoToUpdate.text = newText;
      }
    }
  }// reducers intake properties and functions 
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer  // can be authSlice etc 