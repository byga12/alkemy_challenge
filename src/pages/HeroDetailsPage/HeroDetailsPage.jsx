import React, {useEffect, useState} from 'react'

import { searchById } from '../../services/api'

//STYLE
import s from './HeroDetailsPage.module.sass'

export default function HeroDetails({params}) {

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
              <li>Nombre: <strong>{heroData.name}</strong></li>
              <li>Alias/es: <strong>{heroData.biography.aliases.map(alias => <span key={alias}>{alias}/</span>)}</strong></li>
              <li>Peso: <strong>{heroData.appearance.weight.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
              <li>Altura: <strong>{heroData.appearance.height.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
              <li>Color de ojos: <strong>{heroData.appearance["eye-color"]}</strong></li>
              <li>Color de cabello: <strong>{heroData.appearance["hair-color"]}</strong></li>
              <li>Lugar de trabajo: <strong>{heroData.work.base}</strong></li>
            </ul>
          </>
        }
      </div>
  )
}
  



// ● Peso.
// ● Altura.
// ● Nombre.
// ● Alias.
// ● Color de ojos.
// ● Color de cabello.
// ● Lugar de trabajo.