import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// Provider Function
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user:null,
        token: ""
    })

    // axios config
    axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
    // retrieve the user from local storage
    // Useeffect helps us to immediately log the person in once the page loads
    useEffect(() => {
        const data = localStorage.getItem("auth")
        if(data){
            const parsedData = JSON.parse(data);
            setAuth({...auth, user: parsedData.user, token: parsedData.token})
        }
    }, [])
   
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )

}

// Hook
 const useAuth = () => useContext(AuthContext)

 export {useAuth, AuthProvider}