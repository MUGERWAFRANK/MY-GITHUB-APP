import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ContextTheme = ({children}) => {
const [darkTheme,setDarkTheme] = useState()
 const themeHandler = () =>{
  setDarkTheme((prev) =>!prev)
 }

  return (
    <ThemeContext.Provider value={{darkTheme,themeHandler}}>
      {children}</ThemeContext.Provider>
  )
}

export default ContextTheme