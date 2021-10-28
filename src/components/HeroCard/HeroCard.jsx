import React, {useContext} from 'react'


import UserContext from '../../context/UserContext'
import HeroDetails from '../HeroDetails/HeroDetails';

import s from './HeroCard.module.sass'

export default function HeroCard({heroData}) {
  const context = useContext(UserContext);




  const handleAdd = (heroData) => {
    
    // AFDGHNHG

    
    context.addHero(heroData)
    
  }
  console.log(heroData);
  return (
    <div className={s.container}>

      <div className={s.imgContainer}>

        <img className={s.img} src={heroData.image.url} alt="" />

        <div className={s.nameContainer}>
          <h2 className={s.name}>{heroData.name}</h2>
        </div>
        
        <div className={s.addButton} onClick={()=> handleAdd(heroData)}>+</div>
      </div>



      
      {/* <HeroDetails heroData={heroData}/> */}

    </div>
  )
}
