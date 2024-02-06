import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Hooks in React are used for ui updation
function App() {
  // let counter = 5; this will work but it wont propagate in the ui
  const addValue = () => {
    console.log("Clicked", counter); // problem in ui updation
    counter += 1;
    setCounter(counter)
  }
  const removeValue = () => {
    if(counter >=1 ){
      
      setCounter(counter -1);
    }
  }
  //useSate is responsible for changeing the state  => not the values , but this change is poropagated in the dom
  let [counter, setCounter] = useState(5) // 0th -> counter, 1st -> function that counter the 0th varaible 
  
  return (
    <>
     
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button 
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
