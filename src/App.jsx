import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import AllFragance from './pages/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './pages/Chart'
import DetailPage from './pages/DetailPage'


// WARNING: Do Not change anything in this than just adding your pages to the route.


function App() {

  return (
    <>
    <Router>
    {/* <Menu/> */}
    {/* <SideNav/> */}
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/>        
        {/* <Route path='/detail' element={<DetailPage/>}/>         */}
      </Routes>
    </Router>
    </>
  )
}

export default App
