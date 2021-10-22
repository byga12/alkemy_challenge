import React from 'react'

export default function HeroCard({heroData}) {
  
  return (
    <div>
      <h2>{heroData.name}</h2>
      <div>
        <img style={{maxWidth: "100%", width:"300px"}} src={heroData.image.url} alt="" />
      </div>
      <button>Add to my team!</button>
    </div>
  )
}
