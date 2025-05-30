import React, {createContext, useState} from 'react'


const BackgroundContext = createContext();

const BackgroundProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleBackground = () => {
    setIsDark(!isDark);
  }

  return (
    <BackgroundContext.Provider value={{isDark, toggleBackground}}>
      {children}
    </BackgroundContext.Provider>
  )
}

export { BackgroundContext, BackgroundProvider };