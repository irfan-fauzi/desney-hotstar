import { Gap, ListCarouselMovie, NextArrow } from "../.."


const SectionMovie = ({title, movies}) => {
  return (
    <article>
      <Gap className='h-5' />
      <p className='lg:text-white text-gray-400 font-light lg:text-lg lg:ml-8 ml-5  lg:font-semibold capitalize'>{ title } :</p>
      <Gap className='h-3' />
      <ListCarouselMovie movies={movies.results}  />
    </article>
  )
}

export default SectionMovie
