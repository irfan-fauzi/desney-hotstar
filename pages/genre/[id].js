import { ButtonHome, ColorGenre, Gap, LayoutDetail, ListSelectedMovies } from '../../components';
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
      <ButtonHome />
      <div className='lg:hidden fixed z-50 w-full bottom-0 bg-black py-5'>
        <ColorGenre />
      </div>
      <Gap className='lg:h-10 h-5' />
      <section className='mx-auto w-full max-w-7xl'>
        <ListSelectedMovies movies={movies} />
      </section>
      <Gap className='h-20' />
    </LayoutDetail>
  )
};

export default GenresMovies;
