import API_ENDPOINT from "../config/api-endpoint"

const fetchGenre = async (id) => {
  const res = await fetch(API_ENDPOINT.GENRES(id))
  const resJson = await res.json()
  return resJson
}

const fetchCasts = async (id) => {
  const res = await fetch(API_ENDPOINT.CASTS(id))
  const resjson = await res.json()
  return resjson
}

const fetchSimilarMovie = async (id) => {
  const res = await fetch(API_ENDPOINT.SIMILIAR(id))
  const resjson = await res.json()
  return resjson
}

const fetchReviews = async (id) => {
  const res = await fetch(API_ENDPOINT.REVIEWS(id))
  const resJson = await res.json()
  return resJson
}

const fetchNowPlaying = async () => {
  try {
    const res = await fetch(API_ENDPOINT.NOW_PLAYING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    return `trouble when fetch data nowplaying movies : ${error}`
  }
}

const fetchAllMovies = async () => {
  try {
    const res = await fetch(API_ENDPOINT.ALL)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    return `trouble when fetch all movies : ${error}`
  }
}

const fetchDetail = async (id) => {
  try {
    const res = await fetch(API_ENDPOINT.DETAIL(id))
    const resJson = await res.json()
    return resJson
  } catch (error) {
    return `trouble when fetch detail movies : ${error}`
  }
}

const fetchUpcoming = async () => {
  try {
    const res = await fetch(API_ENDPOINT.UPCOMING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    return `trouble when fetch data upcoming movies : ${error}`
  }
}

export { fetchNowPlaying, fetchUpcoming, fetchDetail, fetchAllMovies, fetchGenre, fetchCasts, fetchReviews, fetchSimilarMovie }