import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams();
  return (
    <div className='bg-purple-600 p-4 mt-4 flex flex-wrap justify-center  text-red-60 text-2xl'>User: {userid}</div>// value is passed from hook useParams , which gets the user id from the url.
  )
}

export default User