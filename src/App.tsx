// import { useState } from 'react'
import './App.css'
import { Outlet} from 'react-router-dom'
import Header from './commponents/header'
import Footer from './commponents/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
