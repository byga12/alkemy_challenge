import React, {useEffect, useState, useContext} from 'react'

import { searchById } from '../../services/api'

//CONTEXT
import UserContext from '../../context/UserContext'

//STYLE
import s from './HeroDetailsPage.module.sass'

export default function HeroDetails({params}) {

  const context = useContext(UserContext)

  const [heroData, setHeroData] = useState({})
  const [status, setStatus] = useState("pending")

  useEffect(()=> {
    setStatus("pending")
    searchById(params.id)
    .then(res => {
      setHeroData({...res.data});
      setStatus("completed");
    })
  },[params.id])


  return (
    <div className={s.container}>
        {
          status==="pending" ? <div>loading...</div> :
          <>
            <img className={s.bckg} src={heroData.image.url} alt="" />
            <ul className={s.list}>
              <li>Name: <strong>{heroData.name}</strong></li>
              <li>Alias/es: <strong>{heroData.biography.aliases.map(alias => <span key={alias}>{alias}/</span>)}</strong></li>
              <li>Weight: <strong>{heroData.appearance.weight.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
              <li>Height: <strong>{heroData.appearance.height.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
              <li>Eye color: <strong>{heroData.appearance["eye-color"]}</strong></li>
              <li>Hair color: <strong>{heroData.appearance["hair-color"]}</strong></li>
              <li>Workplace: <strong>{heroData.work.base}</strong></li>
              <li><button className={s.addHeroButton} onClick={()=> context.addHero(heroData)}>Add to my team</button></li>
            </ul>
          </>
        }
      </div>
  )
}
  

