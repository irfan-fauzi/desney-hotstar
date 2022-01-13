import { Gap, ListCarouselMovie } from "../.."


const SectionMovie = ({title, movies}) => {
  return (
    <article>
      <Gap className='h-10' />
      <p className='text-white lg:text-lg lg:ml-10 ml-2 font-semibold capitalize'>{ title } :</p>
      <Gap className='h-5' />
      <ListCarouselMovie movies={movies.results} />
    </article>
  )
}

export default SectionMovie
