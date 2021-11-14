// import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import s from './MyTeamPage.module.sass'

export default function MyTeamPage() {
  // const context = useContext(UserContext)


  return (
    <UserContext.Consumer>
      { ({getTeam, getTeamStats, removeHero}) => 
      <div className={s.background}>
        <div className={s.container}>


          {/* STATS TOTALES DEL EQUIPO */}
          <div className={s.teamStatsContainer}>
            <h1 className={s.title}>Team {getTeam().length}/6</h1>
            <ul className={s.stats}>
              <h2 className={s.statsTitle}>Global stats</h2>
              {/* Obtengo array de stats, los ordeno y los devuelvo en forma de <li> */}
              {
                Object.entries(getTeamStats())  //[ ["durability", 100], ["power", 100], ... ] 
                .sort((a,b) => b[1]-a[1])  //ordeno segun los valores de los stats
                .map(stat => <li key={stat[0]}>{stat[0]}: {stat[1]}</li>) //devuelvo una array de <li>'s
              }
              <li>avg. weight: {" "} 
                {(getTeam()
                .reduce( (acumulador,numero)=>{
                    const height = +numero.appearance.weight[1].split(" ")[0] //split devuelve array de cadenas, accedo al
                    //indice 0, ya que este tendrá el valor numérico, luego transformo de stirng a numeor con el operador "+"
                    return acumulador + height
                  },0)
                /getTeam().length).toFixed(2) | 0
                } 
              {" "}kg
              </li>
              <li>avg. height:{" "} 
                {(getTeam()
                .reduce( (acumulador,numero)=>{
                    const height = +numero.appearance.height[1].split(" ")[0]
                    return acumulador + height
                  },0)
                /getTeam().length).toFixed(2) | 0
                } 
              {" "}cm
              </li>
            </ul>
          </div>


          
          <h2 className={s.membersTitle}>Members</h2>
          <ul className={s.membersContainer}>
          {getTeam().map(member => 
              <div className={s.memberContainer} key={member.id}>
                <li className={s.memberImageContainer}><img src={member.image.url} alt="superhero" /></li>
                <li className={s.memberName}>{member.name}</li>

                <li>
                  <ul className={s.powerstatsList}>
                    {Object.entries(member.powerstats).map(stat => 
                    <div key={stat[0]}>
                      <strong>{stat[0]}: {stat[1]}</strong>
                    </div>
                    )}
                  </ul>
                </li>

                <div className={s.deleteMemberButton} onClick={()=> removeHero(member.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </div>
              </div>
            )}
          </ul>
        

          </div>
        </div>
      }

    </UserContext.Consumer>
  )
}


