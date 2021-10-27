import React from 'react'

export default function HeroDetails({heroData}) {
  return (
    <div>
      <ul>
      <li>Peso: <strong>{heroData.appearance.weight.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
      <li>Altura: <strong>{heroData.appearance.height.map(unit => <span key={unit}>{unit}/</span>)}</strong></li>
      <li>Nombre: <strong>{heroData.name}</strong></li>
      <li>Alias/es: <strong>{heroData.biography.aliases.map(alias => <span key={alias}>{alias}/</span>)}</strong></li>
      <li>Color de ojos: <strong>{heroData.appearance["eye-color"]}</strong></li>
      <li>Color de cabello: <strong>{heroData.appearance["hair-color"]}</strong></li>
      <li>Lugar de trabajo: <strong>{heroData.work.base}</strong></li>
      </ul>
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