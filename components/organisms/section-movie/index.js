import { Gap, ListCarouselMovie, NextArrow } from "../.."


const SectionMovie = ({title, movies}) => {
  return (
    <article>
      <Gap className='h-5' />
      <p className='text-white lg:text-lg lg:ml-8 ml-5  font-semibold capitalize'>{ title } :</p>
      <Gap className='h-3' />
      <ListCarouselMovie movies={movies.results}  />
    </article>
  )
}

export default SectionMovie
