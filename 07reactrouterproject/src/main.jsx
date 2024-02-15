import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader}from './components/GitHub/Github.jsx'
// this is how routing is created , this is the 1st method , there cann be another method
// const router = createBrowserRouter([
//   {
//     path:'/', // top level element
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ] 
//   }
// ]) 


// this is the second method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
      <Route path='' element={ <Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader} path='github' element={<Github/>}/>
      
    </Route>//loader enables to directly make the api calls , it also caches the data  so that we don't have to call everytime when navigating through pages, it uis an optimized way to load the api data 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
// router takes the  props for it to be displayed in the ui
