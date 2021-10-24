import React from 'react'
import UserContext from '../../context/UserContext'


export default function MyTeamPage() {
  return (
    <UserContext.Consumer>
      { context => 
      <h1>My team</h1>

      }
    </UserContext.Consumer>
  )
}
