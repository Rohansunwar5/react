import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App </h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props: {
//       href: 'https://google.com',
//       target: '_blank'
//     }, 
//     children: 'Click me to visit google'
//   } // parsing of object to react in custom but as we dont know the syntax of the real  app so it will be hard for us to parse this kind of data into a react element, for that we can use createElement from react itself 

  const anotherElement = (
    <a href="http://www.github.com" target ="_blank">Github</a>
  )
  const anotherUser = "chai aur react"

  const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    // if(anotherUser){}  =>  js code execution is not allowed because its and evalutaed expression in the inner working of the react from creating element, this wont match the parameters 
    anotherUser // example of the varaible that was being passed as react element from the custom react 
  )
ReactDOM.createRoot(document.getElementById('root')).
render(
    // <App/>
    // <MyApp />
    // MyApp() does the same thing 
    // anotherElement
    reactElement
)
