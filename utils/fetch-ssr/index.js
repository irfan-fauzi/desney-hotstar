import API_ENDPOINT from "../config/api-endpoint"


const fetchNowPlaying = async () => {
  try {
    const res = await fetch(API_ENDPOINT.NOW_PLAYING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    return `trouble when fetch data nowplaying movies : ${error}`
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

export { fetchNowPlaying, fetchUpcoming }