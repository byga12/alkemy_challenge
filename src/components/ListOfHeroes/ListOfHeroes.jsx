import React, {useState, useEffect} from 'react'

import HeroCard from '../HeroCard/HeroCard'
import s from './ListOfHeroes.module.sass'
import { searchByKeyword } from '../../services/api'

export default function ListOfHeroes({params}) {
  const {keyword} = params;
  //data son los resultados de la búsqueda
  const [data, setData] = useState({}) 
  const [status, setStatus] = useState("")
  console.log(data);
  console.log(keyword);
  useEffect(()=>{
    setStatus("pending");
    searchByKeyword(keyword)
    .then(response => {
      setData(response.data)
      setStatus("completed")
    })
  }, [keyword])

  return (
    <div style={status === "" ? null : {paddingTop:"100px", paddingBottom:"40px"}} className={s.searchResults}>
      
      {status === "pending" ? "loading..." : null }

      {status === "completed" ? 
          data.results ? 
              data.results.map(hero => <HeroCard key={hero.id} heroData={hero}/>)
          : "no results found"
      : null}
  
    </div>
  )
}
