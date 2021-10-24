import React, {useState, useEffect} from "react";
import { useLocation } from "wouter";
const UserContext = React.createContext(null);
export default UserContext;

const UserContextWrapper = (props) => {
  const [location, setLocation] = useLocation();


  const [userInfo] = useState({ //no voy a usar una función de cambio de estado asi que no hace falta guardarla en una variable
    team: JSON.parse(localStorage.getItem("team")),
  })


  // Para controlar cambios en el path
  useEffect(()=>{
    if(!localStorage.getItem("token")) {
      setLocation('/login')
    }
  },[location, setLocation])
  


  return (
    <UserContext.Provider value={
      {
        getUserInfo: () => userInfo,
      }
    }>
      {props.children}
    </UserContext.Provider>
  )
}
export {UserContextWrapper};