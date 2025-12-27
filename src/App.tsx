import './App.css'
import { Outlet} from 'react-router-dom'
import Header from './commponents/header'
import Footer from './commponents/footer'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
