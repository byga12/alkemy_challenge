// import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
// import s from './MyTeamPage.module.sass'

export default function MyTeamPage() {
  // const context = useContext(UserContext)
  // console.log(context.getTeam());
  // console.log(context.getTeamStats());
  return (
    <UserContext.Consumer>
      { ({getTeam, getTeamStats, removeHero}) => 
      <>
      <h1>My team {getTeam().length}/6</h1>

      <h2>Global stats</h2>
      <ul>
        {Object.entries(getTeamStats()).map(stat => <li key={stat[0]}>{stat[0]}: {stat[1]}</li>)}
      </ul>


      <h2>Members</h2>
      {getTeam().map(member => 
      <div key={member.id}>
        <ul>
          <li>{member.name}</li>
          <li><img style={{maxWidth: "100%", width:"300px"}} src={member.image.url} alt="superhero" /></li>
          <li>
            {Object.entries(member.powerstats).map(stat => 
            <div key={stat[0]}>
              <strong>{stat[0]}: {stat[1]}</strong>
              
            </div>
            )}
          </li>
        </ul>
        <button onClick={()=> removeHero(member.id)}>X</button>
      </div>
        )}
      </>
      }
    </UserContext.Consumer>
  )
}
