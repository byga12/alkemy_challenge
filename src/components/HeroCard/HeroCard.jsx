import React, {useContext} from 'react'


import UserContext from '../../context/UserContext'
import { useLocation } from 'wouter';

import s from './HeroCard.module.sass'

export default function HeroCard({heroData}) {
  const context = useContext(UserContext);

  const setLocation = useLocation()[1];


  const handleAdd = (heroData) => {
    
    // AFDGHNHG

    
    context.addHero(heroData)
    
  }

  return (
    <div onClick={()=> setLocation(`/hero/${heroData.id}`)} className={s.container}>

      <div className={s.imgContainer}>

        <img className={s.img} src={heroData.image.url} alt="" />

        <div className={s.nameContainer}>
          <h2 className={s.name}>{heroData.name}</h2>
        </div>
        
        <div className={s.addButton} onClick={(e)=> {handleAdd(heroData);e.stopPropagation()}}>+</div>
      </div>

    </div>
  )
}
