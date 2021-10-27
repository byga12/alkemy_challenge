import React, {useContext} from 'react'


import UserContext from '../../context/UserContext'
import HeroDetails from '../HeroDetails/HeroDetails';


export default function HeroCard({heroData}) {
  const context = useContext(UserContext);




  const handleAdd = (heroData) => {
    
    // AFDGHNHG

    
    context.addHero(heroData)
    
  }
  console.log(heroData);
  return (
    <div>
      <h2>{heroData.name}</h2>
      <div>
        <img style={{maxWidth: "100%", width:"300px"}} src={heroData.image.url} alt="" />
      </div>
      <button onClick={()=> handleAdd(heroData)}>Add to my team!</button>
      <HeroDetails heroData={heroData}/>
    </div>
  )
}
