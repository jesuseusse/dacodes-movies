import axios from 'axios'
import { BASE_URL, BEARER_TOKEN } from '../config'

export const moviesApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
})

export const getGuestSession = async () => {
  let res
  try {
    res = await moviesApi.get('/authentication/guest_session/new', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`
      }
    })
  } catch (error) {
    console.error(error)
  }
  return res
}
// export const getLatestMovies = async (page = 1) => {
//   let res
//   try {
//     res = await movies.get(`/movie/now_playing`, { params: { page } })
//   } catch (error) {
//     console.error(error)
//   }
//   return res?.data
// }
// export const getPopularMovies = async () => {
//   let res
//   try {
//     res = await movies.get(`/movie/now_playing`)
//   } catch (error) {
//     console.error(error)
//   }
//   return res
// }
// export const getTopRatedMovies = async () => {
//   let res
//   try {
//     res = await movies.get(`/authenticate`)
//   } catch (error) {
//     console.error(error)
//   }
//   return res
// }
// export const getUpComingMovies = async () => {
//   let res
//   try {
//     res = await movies.get(`/authenticate`)
//   } catch (error) {
//     console.error(error)
//   }
//   return res
// }
