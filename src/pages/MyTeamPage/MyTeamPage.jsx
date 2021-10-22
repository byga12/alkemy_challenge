import React from 'react'
import UserContext from '../../context/UserContext'


export default function MyTeamPage() {
  return (
    <UserContext.Consumer>
      { context => 
      <h1>{context.userInfo.token}</h1>

      }
    </UserContext.Consumer>
  )
}
