import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// this hook enables us to consume the data from the function we are passing in the loader of the route in the main.jsx

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect (() => {
  //   fetch('https://api.github.com/users/Rohansunwar5')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])
 
  return (
    <>
    
    <div className='text-center m-4 bg-slate-700 text-white p-4 text-4xl flex flex-wrap justify-center'>
      Github repos: {data.public_repos}
    </div>
      <img className='flex flex-wrap justify-center justify-items-center mt-3 m-2' src={data.avatar_url} alt="Git picture" width={300}/>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Rohansunwar5')
  return response.json() 
}