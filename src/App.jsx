import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Order from "./pages/Order"
import './App.css'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Order/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
