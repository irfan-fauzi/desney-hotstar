import { useEffect, useState } from "react"
import { Gap, ListCarouselMovie } from "../../.."
import API_ENDPOINT from "../../../../utils/config/api-endpoint"


const Family = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchMovie = async () => {
    try {
      const response = await fetch(API_ENDPOINT.GENRES(10751))
      const resJson =  await response.json() 
      setMovies(resJson.results) 
    } catch (error) {
      console.log(`ada masalah ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie()
    return () => {
      setMovies([])
    }
  },[])

  return (
    <section className='mt-[-1.5rem]'>
      <article>
        <Gap className='h-3' />
        <p className='text-white text-lg ml-10 font-semibold'>Family :</p>
        <Gap className='h-5' />
        <ListCarouselMovie movies={movies} />
      </article>
    </section>
  )
}

export default Family
