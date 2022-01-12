import { Gap, ListCarouselMovie } from "../.."


const SectionMovie = ({title, movies}) => {
  return (
    <article>
      <Gap className='h-3' />
      <p className='text-white text-lg ml-10 font-semibold capitalize'>{ title } :</p>
      <Gap className='h-5' />
      <ListCarouselMovie movies={movies.results} />
    </article>
  )
}

export default SectionMovie
