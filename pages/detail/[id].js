import { fetchAllMovies, fetchDetail } from "../../utils/fetch-ssr"


export const getStaticPaths = async () => {
  const resjson = await fetchAllMovies()
  const arrayMovies = resjson.results
  const paths = arrayMovies.map(movie => {
    return {
      params: { id: movie.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const movie = await fetchDetail(id)
  return {
    props : {
      movie
    }
  }
}

const Detail = ({ movie }) => {  

  return (
    <div>
      <p>{movie.title}</p>
    </div>
  )
}

export default Detail
