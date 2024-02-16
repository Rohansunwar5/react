import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => { // children as props  is a way to pass the component that will be rendered within this provider.  
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider