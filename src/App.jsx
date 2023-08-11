import React from 'react'
import {
  Footer,
  Header,
  Main,
<<<<<<< HEAD

} from './Component'
import useScrollPosition from './utils/useScrollPosition'
=======
  Nav
} from './Component'
>>>>>>> 25f4eda4964cf08e44777c2831c596af9a6b92f9

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
