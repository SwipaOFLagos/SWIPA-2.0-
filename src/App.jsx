import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './page/Home'
import AllFragance from './page/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './page/Chart'
import { ToastContainer } from 'react-toastify'
import SignUp from './page/SignUp'
import CustomerDetails from './components/CustomerDetails'
import CartItems from './components/CartItems'
import Order from './page/Order'
import Newarrival from './page/Newarrival'
import Breadcrumbs from './components/NABreadcCumbs'
// import DetailPage from './pages/DetailPage'




// WARNING: Do Not change anything in this page.

  
    // Hello sir, i think breadcrumbs should be here. not in my all fragrance page
    // *the breadcrumbs is working for everybody
    // uncomment line 36 if you also think so sir.
    
    

function App() {

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
    {/* <Breadcrumbs/>   */}
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/customer-details' element={<CustomerDetails/>}/>        
        <Route path='/cart' element={<CartItems/>}/>        
        <Route path='/order' element={<Order/>}/>        
        <Route path='/new-arrivals' element={<Newarrival/>}/>        

        {/* <Route path='/detail' element={<DetailPage/>}/>         */}
      </Routes>
    </Router>
    </>
  )
}

export default App
