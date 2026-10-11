import React from 'react'
import {createContext} from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
  return (
    <UserContext.Provider value={{name : "Usman"}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider