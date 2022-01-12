import API_ENDPOINT from "../config/api-endpoint"


const fetchNowPlaying = async () => {
  try {
    const res = await fetch(API_ENDPOINT.NOW_PLAYING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.log(`ada masalah now playing ${error}`)
  }
}

const fetchUpcoming = async () => {
  try {
    const res = await fetch(API_ENDPOINT.UPCOMING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.log(`ada masalah fetch upcoming : ${error}`)
  }
}

export { fetchNowPlaying, fetchUpcoming }