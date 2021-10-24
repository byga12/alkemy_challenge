import { useState } from 'react';
import s from './ExploreHeroesPage.module.sass'

import HeroCard from '../../components/HeroCard/HeroCard';

//API
import {searchByKeyword} from '../../services/api'


export default function SearchPage() {

  

  const [data, setData] = useState({}) 
  const [status, setStatus] = useState("")

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("pending");
    searchByKeyword(e.target.searchInput.value)
    .then(response => {
      setData(response.data)
      setStatus("completed")
    })
  }


  return (
    <>
    <div className={s.container}>
      <form className={s.searchBar} onSubmit={handleSubmit}>
        <input  className={s.searchInput}  name="searchInput" type="text" placeholder="e.g: batman" />
        <button className={s.searchButton}>Q</button>
      </form>
    </div>

    <div className={s.searchResults}>
      {status === "pending" ? "loading..." : null }

      {status === "completed" ? 
          data.results ? 
              data.results.map(hero => <HeroCard key={hero.id} heroData={hero}/>)
          : "no results found"
      : null}
  
      </div>
    </>
  )
}
