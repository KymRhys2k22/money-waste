import React, { useState } from 'react'
import {
  Footer,
  Header,
  Main,
  Messenger,
} from './Component'






const App = () => {
  const [darkMode, setDarkMode] = useState(false)


  return (
    <div className={`${darkMode && "dark"}`}>

      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main />
      <Footer />
      <Messenger />
    </div>
  )
}

export default App
