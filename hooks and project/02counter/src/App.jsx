import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Hooks in React are used for ui updation
function App() {
  // let counter = 5; this will work but it wont propagate in the ui
  const addValue = () => {
    // problem in ui updation
    if (counter < 20) {
      // counter += 1; same thing
      // prev counter returns  previous state value
      // setCounter(counter + 1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      // when the value is coming through callback then it completes and a proper ui updatetion is done


      // a batch  of state updates is created here and then all at once when the component re-renders, so only once is the value incremented 
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter >=1 ){
      // counter -= 1; same thing
      setCounter(counter -1);
    }
  }
  const reset  = () => {
    setCounter(counter =0);
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
      <button onClick={reset}>Reset Value {counter}</button>
      <br />
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
