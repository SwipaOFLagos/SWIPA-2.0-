import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './page/Home'
import AllFragance from './page/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './page/Chart'
// import { ToastContainer } from 'react-toastify'
import SignUp from './page/SignUp'
import CustomerDetails from './components/CustomerDetails'
import CartItems from './components/CartItems'
import Order from './page/Order'
import Newarrival from './page/Newarrival'
import DetailPage from './page/DetailPage'




// WARNING: Do Not change anything in this page.



function App() {

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
    {/* <ToastContainer/> */}
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/customer-details' element={<CustomerDetails/>}/>        
        <Route path='/cart' element={<CartItems/>}/>        
        <Route path='/order' element={<Order/>}/>        
        <Route path='/new-arrivals' element={<Newarrival/>}/>        
        <Route path='/detail' element={<DetailPage/>}/>        
      </Routes>
    </Router>
    </>
  )
}

export default App
