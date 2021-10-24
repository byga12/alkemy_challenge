import { useEffect } from 'react';
import { Link, useLocation } from 'wouter'
export default function Navigation() {

  const [location] = useLocation()
  useEffect(()=>{
  },[location])


  return (
    <nav>
      <ul>
        <li><Link to="/team">My Team</Link></li>
        <li><Link to="/explore">Explore Heroes</Link></li>
        {!localStorage.getItem("token") ? <li><Link to="/login">Login</Link></li> : <li>You are logged in!</li>}
      </ul>
    </nav>
  )
}
