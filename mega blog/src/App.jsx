import { useDispatch } from 'react-redux';
import './App.css'
import { useState } from 'react';
import authService from './appwrite/auth'
import { useEffect } from 'react';
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom';
import {Header, Footer} from './components/index.js'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser() //asking weather the current  user is logged in or not
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* Todo */}
          {/* <Outlet /> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App
