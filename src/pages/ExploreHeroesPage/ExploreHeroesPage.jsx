import s from './ExploreHeroesPage.module.sass'

import { useLocation } from 'wouter';




export default function SearchPage() {

  const setLocation = useLocation()[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${e.target.searchInput.value}`)

  }

  return (
    <>
    <div className={s.searchContainer}>
      <form className={s.searchBar} onSubmit={handleSubmit}>
        <input autoComplete="off" className={s.searchInput}  name="searchInput" type="text" placeholder="e.g: batman" />
        <button className={s.searchButton}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </form>
    </div>


    </>
  )
}
