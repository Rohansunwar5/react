import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // props enables us for the resuse of component 
  let myObj = {
    username : "Rohan",
    age: 21,
  } 
  let newArr = [1,23,45];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username= "rohan" btnText= "Click me "/>
      <Card username=" chai aur code" btnText = "Visit Me"/>

    </>
  )
}

export default App
