import { useEffect } from 'react';
import { Link, useLocation } from 'wouter'

import s from './Navigation.module.sass'
export default function Navigation() {

  const [location, setLocation] = useLocation()
  //cada vez que cambia la location, me fijo si tengo un token de autenticación en localStorage, si no hay, redirijo a /login
  useEffect(()=>{
    if(!localStorage.getItem("token")) {
      setLocation('/login')
    }
  },[location, setLocation])


  const handleLogout= () => {
    localStorage.removeItem("token");
    localStorage.removeItem("team");
    setLocation('/login')
  }

  return (
    <nav className={s.nav}>
      <ul className={s.links}>
        <li><Link to="/team">My Team</Link></li>
        <li><Link to="/">Explore Heroes</Link></li>
        {
          !localStorage.getItem("token") ? 
          <li className={s.loginButton}><Link to="/login">Login</Link></li> : 
          <li className={s.logoutButton} onClick={handleLogout}>Logout</li>
        }
      </ul>
    </nav>
  )
}
