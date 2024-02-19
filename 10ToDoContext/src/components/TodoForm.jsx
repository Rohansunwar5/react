import React ,{useState} from 'react'
import { UseTodo } from '../context';

function TodoForm() {

  const [todo, setTodo] = useState(" ");
  // using useTodo beacust it has the useContext of all the TodoContext
  const {addTodo} = UseTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todo) return
    addTodo({ todo, completed:false}) // while passing to the function the values should be object rather than a simple string, since we already were passing id in <App.jsx/> we can prevent it passing as parameter, and if field name and value names are same we can just pass the value 
    setTodo("") // emptying the value
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo} // wiring up
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}


export default TodoForm;