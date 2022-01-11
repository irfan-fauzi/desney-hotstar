import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Gap, ListCarouselMovie } from '../..'
import CONFIG from "../../../utils/config/config"


const NowPlaying = (props) => {
  const movies = props.nowPlaying.results
  const movieListFirst = movies.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )
  return (
    <section className=''>
      <article>
        <Gap className='h-3' />
        <p className='text-white text-lg ml-10 font-semibold'>Top Picks For You :</p>
        <Gap className='h-5' />
        <ListCarouselMovie movieListFirst={movieListFirst} movieListSecond={movieListSecond}/>
      </article>
    </section>
  )
}

export default NowPlaying
