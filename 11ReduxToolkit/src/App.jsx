import { useState } from 'react'
import './App.css'
import AddTodo from '../src/components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  return (
    <>
     <h1>Learning Redux ToolKit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
