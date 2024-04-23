import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  })

//   axios configuration
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;


// retrieve the user from local storage.
useEffect(()=>{
    const data = localStorage.getItem("auth");
    if(data){
        const parsedData = JSON.parse(data);
        setAuth({...auth, user: parsedData?.user, token: parsedData?.user?.token});
    }
}, [])


return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
)


}

// hook
const useAuth = () => useContext(AuthContext)


export { useAuth, AuthProvider}