import React, {useContext} from 'react'


import UserContext from '../../context/UserContext'
import { Link } from 'wouter';

import s from './HeroCard.module.sass'

export default function HeroCard({heroData}) {
  const context = useContext(UserContext);



  const handleAdd = (heroData) => {
    context.addHero(heroData)
  }

  return (
    //Al hacer click en el div cambio la location a '/hero/id'
    <Link to={`/hero/${heroData.id}`}>
      <div className={s.container}>

        <div className={s.imgContainer}>

          <img className={s.img} src={heroData.image.url} alt="" />

          <div className={s.nameContainer}>
            <h2 className={s.name}>{heroData.name}</h2>
          </div>
          
          <div className={s.addButton} onClick={(e)=> {handleAdd(heroData);e.stopPropagation()}}>+</div>
        </div>

      </div>
    </Link>
  )
}
