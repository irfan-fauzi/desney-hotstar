import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Gap, ListCarouselMovie } from '../..'

const Upcoming = (upComing) => {
  const movies = upComing.upComing.results
  const movieListFirst = movies.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )
  
  return (
    <section className='mt-[-1.5rem]'>
      <article>
      <p className='text-white text-lg ml-10 font-semibold'>Coming Soon :</p>
      <Gap className='h-5' />
      <ListCarouselMovie movieListFirst={movieListFirst} movieListSecond={movieListSecond}/>
      </article>
    </section>
  )
}

export default Upcoming
