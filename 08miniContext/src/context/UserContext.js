import React from 'react'
// context in react acts like a global variable 

const UserContext = React.createContext()

export default UserContext;

// Context => Provider component that wraps our app and makes the data available to any nested components



{/*  
// for the context to be accessable we also need to  provide it with some value using provider, so let’s create a new file called UserContextProvider.
<UserContext>
  <Login/>
  <Card>
    <Data/>
  </Card>
</UserContext> */}