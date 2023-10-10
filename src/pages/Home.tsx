import { useEffect, useState } from 'react'
import { useGetMovies } from '../hooks/useGetMovies'
import { Poster } from '../components/Poster'

const categories = [
  { path: 'now_playing', name: 'Now Playing' },
  { path: 'popular', name: 'Popular' },
  { path: 'top_rated', name: 'Top Rated' },
  { path: 'upcoming', name: 'Upcoming' }
]

export const Home = () => {
  const [current, setCurrent] = useState(categories[0])
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, totalPages, movies, getMovies } = useGetMovies()

  useEffect(() => {
    getMovies(current.path, currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, currentPage])

  useEffect(() => {}, [current])

  return (
    <div className="layout-home">
      <div className="options">
        {categories.map((category) => {
          return (
            <button
              key={category.name}
              className={`btn btn-primary ${
                current.path === category.path ? 'active' : ''
              }`}
              onClick={() => setCurrent(category)}
            >
              {category.name}
            </button>
          )
        })}
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <h1 className="home-title">{current.name}</h1>
          <h2 className="home-subtitle">{current.name}</h2>
          <ul className="movies-list">
            {movies.length &&
              movies.map((movie) => {
                return (
                  <li className="movies-list__item" key={movie.id}>
                    <Poster movie={movie} />
                  </li>
                )
              })}
          </ul>
          <div className="pagination">
            <button
              className="btn-pagination"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >{`<`}</button>
            <p>
              {currentPage}/{totalPages}
            </p>
            <button
              className="btn-pagination"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >{`>`}</button>
          </div>
        </>
      )}
    </div>
  )
}
