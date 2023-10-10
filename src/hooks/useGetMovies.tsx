import { useState } from 'react'
import { moviesApi } from '../api/api'
import { Movie } from '../types/movie'

export const useGetMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const getMovies = async (list: string, page = 1) => {
    setLoading(true)

    const { data } = await moviesApi.get(`movie/${list}`, { params: { page } })
    console.log(data)
    setPage(data.page)
    setTotalPages(data.total_pages)
    setMovies(data.results as Movie[])
    setLoading(false)
  }

  return { loading, page, totalPages, movies, getMovies }
}
