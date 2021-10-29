import { useEffect } from 'react';
import { Link, useLocation } from 'wouter'

import s from './Navigation.module.sass'
export default function Navigation() {

  const [location, setLocation] = useLocation()
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
        <li><Link to="/explore">Explore Heroes</Link></li>
        {
          !localStorage.getItem("token") ? 
          <li className={s.loginButton}><Link to="/login">Login</Link></li> : 
          <li className={s.logoutButton} onClick={handleLogout}>Logout</li>
        }
      </ul>
    </nav>
  )
}
