import React, {useState, useEffect} from "react";
import { useLocation } from "wouter";
const UserContext = React.createContext(null);
export default UserContext;

const UserContextWrapper = (props) => {
  const [location, setLocation] = useLocation();

  //Para controlar cambios en el path
  // useEffect(()=>{
  //   if(location !== "/login") {
  //   setLocation('/login')
  //   }
  //   console.log(location);
  // },[location, setLocation])


  const [userInfo, setUserInfo] = useState({
    team: JSON.parse(localStorage.getItem("team")),
    token: localStorage.getItem("token"),
  })
  
  return (
    <UserContext.Provider value={
      {
        userInfo: userInfo,
      }
    }>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContextWrapper};