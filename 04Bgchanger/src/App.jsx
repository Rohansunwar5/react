import { useState } from "react"; 

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            //onClick={setColor("red")} why we are not using this function is because of the onclick method issue, onclick requires a function and we are passing the ref, so we use callback function inside it 
            onClick={() => {
              setColor("red")
            }} 
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "red", color: "white"}}
          >Red</button>
          <button
            onClick={() => {
              setColor("green")
            }} 
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "green", color: "white"}}
          >green</button>
          <button 
            onClick={() => {
              setColor("blue")
            }} 
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "blue", color: "white"}}
          >blue</button>
          <button
            onClick={() => {
              setColor("purple")
            }} 
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "purple", color: "white"}}
          >purple</button>
          <button
            onClick={() => {
              setColor("yellow")
            }} 
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "yellow", color: "white"}}
          >yellow</button>
          <button
            onClick={() => {
              setColor("orange")
            }}  
            className="outline-none px-4 py-1 rounded-full shadow-md"
            style={{backgroundColor: "orange", color: "white"}}
          >orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
