import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import AllFragance from './pages/AllFragance'


// WARNING: Do Not change anything in this than just adding your pages to the route.


function App() {

  return (
    <>
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>
        {/* ==== Add the route to your page here === */}
        
      </Routes>
    </Router>
    </>
  )
}

export default App
