import React from 'react'
import {
  Footer,
  Header,
  Main,

} from './Component'
import useScrollPosition from './utils/useScrollPosition'

const App = () => {
  const useScroll = useScrollPosition
  console.log(useScroll)

  return (
    <>
      <Header />



      <Main />
      <Footer />

    </>
  )
}

export default App