import React, { useEffect, useState } from 'react'
import { Movie } from '../types/movie'
import { moviesApi } from '../api/api'
import { Rating } from '@mui/material'
import { MovieDetail } from '../types/details'

interface Props {
  movie: Movie
}

const convertMinsToHrsMins = (mins: number) => {
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? 0 + h : h // (or alternatively) h = String(h).padStart(2, '0')
  m = m < 10 ? 0 + m : m // (or alternatively) m = String(m).padStart(2, '0')
  return `${h}h ${m}m`
}

export const Poster = ({ movie }: Props) => {
  const [details, setDetails] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const onMouseEnter = async () => {
    const res = await moviesApi.get(`/movie/${movie.id}`)
    if (res) {
      const data = res.data as MovieDetail
      const genres = data.genres
        ?.map((genre) => genre.name)
        .slice(-2)
        .join(' / ')

      const year = new Date(data.release_date).getFullYear()
      const runtime = data.runtime

      setShowDetails(true)
      setDetails(`${year}. ${genres}. ${convertMinsToHrsMins(runtime)}`)
    }
  }

  return (
    <div
      className="poster"
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img
        className="poster__img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div
        className="poster__content"
        style={{ display: showDetails ? 'block' : 'none' }}
      >
        <h3 className="poster__content__title">{movie.title}</h3>
        <h4 className="poster__content__subtitle">{details}</h4>
        <p className="poster__content__overview">{movie.overview}</p>

        <Rating
          name="rate"
          size="large"
          value={movie.vote_average / 2}
          precision={0.5}
          disabled
        />
      </div>
    </div>
  )
}
