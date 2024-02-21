import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo , updateTodo} from '../features/todo/todoSlice.js'

function Todos() {
   const todos = useSelector(state => state.todos); // we can get acces of state using callback
   const dispatch = useDispatch()
   const [newText, setNewText] = useState('');

   const handleUpdate = (id) =>{
    if(newText.trim() != ''){
      dispatch(updateTodo({id: id, newText: newText}))
      setNewText("");
    }
   }
  return (
    <> 
    <div>Todos</div>
    <ul>
    {todos.map((todo) =>(
      <li 
      className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
      key={todo.id}>
        <div className='text-white'>
        {todo.text}

        </div>
        <button
        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          
          onClick={() => dispatch(removeTodo(todo.id))}// whenever we want to or suppose to pass parametes in a method, we mainly use callback because we cannot put it under paranthesis because it immediatly executes when its supposed to be deleting when its clicked 
        >X</button>
        {/* <button onClick={() => dispatch(handleUpdate(todo.id))}>Update</button> */}
        {/* {todo.text} */}
      </li>
    ))}

    </ul>
    </>
  )
}

export default Todos