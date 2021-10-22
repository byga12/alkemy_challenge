import React, {useContext} from 'react'
import { Link } from 'wouter'
import UserContext from '../../context/UserContext'
export default function Navigation() {

  const context = useContext(UserContext);



  return (
    <nav>
      <ul>
        <li><Link to="/team">My Team</Link></li>
        <li><Link to="/explore">Explore Heroes</Link></li>
        {!context.userInfo.token? <li><Link to="/login">Login</Link></li> : <li>You are logged in!</li>}
      </ul>
    </nav>
  )
}
