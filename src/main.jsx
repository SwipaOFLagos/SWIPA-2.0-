import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/Auth.jsx';
<<<<<<< HEAD
=======
import { CartProvider } from './contexts/Cart.jsx';
import { SearchProvider } from './contexts/Search.jsx';
>>>>>>> 67844eebe0c55040019555630050f64ac44db47c




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
<<<<<<< HEAD
    <App />
=======
    <SearchProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchProvider>
>>>>>>> 67844eebe0c55040019555630050f64ac44db47c
    </AuthProvider>
  </React.StrictMode>,
)
