import { useState, useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  
  const [length, SetLength] = useState(8);
  const [numAllow, SetNumAllow] = useState(false);
  const [charAllow, SetCharAllow] = useState(false);
  const [password, SetPassword] = useState("");
  
  //useRef hook 
  // in order to use refernce inthe html element we need to pass the ref value 
  const passwordRef = useRef(null)  

  const copyPassword = useCallback(() => {
    passwordRef.current?.select() // hightlighting the password 
    // passwordRef.current?.setSelectionRange(0,3) // hightlighting the password  from 1st range to 2nd range
    window.navigator.clipboard.writeText(password)
  }, [password,SetPassword])

  // since there are multiple parameters that will be required in the re rendering in between , so we use useCallback HOOK
  // this lets you cahce a function defination between re-renders
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str +=  "0123456789";
    if(charAllow) str += "`~!@#$%^&*()";

    for (let index = 1; index <= length; index++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);  
    }

    SetPassword(pass); 

  },[length, numAllow,charAllow, SetPassword]) //concept of memoization

  useEffect(() => { // run the inside function if there is any change in the internal dependencies
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator])  //1st callback , 2nd dependency array 

  return (
    <>
      <div className='w-full h-screen bg-slate-700 flex flex-auto justify-around'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-violet-300 bg-purple-500 '>
          <h1 className=' text-white text-center text-xl mt-5'>Password Generator</h1>
          <div className='flex shadow-sm rounded-lg overflow-hidden mb-4 mt-3'>
            <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy</button>
          </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={6}
              max={20}
              value={length}//linking 
              className='cursor-pointer'
              onChange={(e) => {SetLength(e.target.value)}}
              />
              <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={numAllow}
              id='numerInput'
              onChange={() => {
                SetNumAllow((prev) => !prev) //basically reverses the value 
              }}
              />
               <label htmlFor='numerInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={charAllow}
              id='characterInput'
              onChange={() => {
                SetCharAllow((prev) => !prev) //basically reverses the value 
              }}
              />
               <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
        </div>
      

      </div>
    </>
  )
}

export default App
