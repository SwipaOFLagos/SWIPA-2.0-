import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './page/Home'
import AllFragance from './page/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './page/Chart'
import { ToastContainer } from 'react-toastify'
import SignUp from './page/SignUp'
// import DetailPage from './pages/DetailPage'


// WARNING: Do Not change anything in this than just adding your pages to the route.
import CartItems from './components/CartItems'





function App() {

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 

        {/* <Route path='/detail' element={<DetailPage/>}/>         */}
      </Routes>
    </Router>
    </>
  )
}

export default App
