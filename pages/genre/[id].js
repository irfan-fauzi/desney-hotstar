import { Gap, LayoutDetail, MenuButtonMobile, MoviesThumbnail } from '../../components';
import CONFIG from '../../utils/config/config';
import { fetchGenre } from '../../utils/fetch-ssr';


export const getStaticPaths = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${CONFIG.KEY}&language=en-US`)
  const data = await res.json()
  
  const paths = data.genres.map((genre) => {
    return {
      params: { id: genre.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const genres = await fetchGenre(id)
  return {
    props: {
      genres
    }
  }
}


const GenresMovies = ({genres}) => {

  const movies = genres.results
  
  return (
    <LayoutDetail>
      <MenuButtonMobile />
      <Gap className='h-20' />
      <section className='mx-auto w-full max-w-7xl'>
        <article className='grid md:grid-genres md:gap-5 gap-y-5 grid-cols-2'>
          {movies.map(movie => (
            <MoviesThumbnail key={movie.id} movie={movie} />
          ))}
         </article>
      </section>
      <Gap className='h-20' />
    </LayoutDetail>
  )
};

export default GenresMovies;
