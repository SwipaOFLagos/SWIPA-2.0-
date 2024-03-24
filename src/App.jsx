import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import AllFragance from './pages/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'


// WARNING: Do Not change anything in this than just adding your pages to the route.


function App() {

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
      </Routes>
    </Router>
    </>
  )
}

export default App
