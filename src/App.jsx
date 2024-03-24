
import './App.css'
import AllFragance from './Pages/AllFragance'
import Login from './pages/Login'
import DetailPage from './pages/DetailPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
    {/* <h1>Final Project</h1> */}
    
    <h1 className='bg-primary'>Final Project</h1>
    {/* <div className="">
    <AllFragance/>
    </div> */}
    <div className="" >
     <DetailPage/>
    
     </div>

     
    </>
  )
}

export default App
