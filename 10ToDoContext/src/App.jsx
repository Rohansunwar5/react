import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] =  useState([])
  const addTodo = (todo) => { //  Add a new todo to the list
    setTodos((prevTodo) => [ {id: Date.now(), ...todo} ,...prevTodo])
  }

  const updateTodo = (id , todo) => {// inside map individual todo
    setTodos((prevTodo) => prevTodo.map((Todo)  =>(Todo.id === id ? todo : Todo))) 
    // prevTodo.id is the one that is already present in the list and the id is the one that is being passed to match the available todo for the change 

    // Note, todo => is the value we are passing and Todo => the the value we are accessing inside the already present object property of todos 
  } 
  
  const deleteTodo = (id) => {
    setTodos(( prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    // filtering out the matching id out, filter wont take the matching functions 
  }

  const toggleComplete = (id) => {
    console.log("checl",id);
    setTodos((prevTodo) => prevTodo.map((Todo) => (Todo.id === id ? {...Todo, completed: !Todo.completed}  : Todo) ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return(
    <TodoProvider value={{ todos, addTodo,updateTodo,deleteTodo,toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4"><TodoForm/></div>
        <div className="flex flex-wrap gap-y-3">
          {/* Loop and TodoItem here */}
          {todos.map((todo) => ( 
            <div key={todo.id}
              className='w-full'
            >
              <TodoItem todo= {todo}/>
            </div>
           ))}

        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
