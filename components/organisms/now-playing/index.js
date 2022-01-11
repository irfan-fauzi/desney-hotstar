import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Gap, ListCarouselMovie } from '../..'



const NowPlaying = (props) => {
  
  return (
    <section className=''>
      <article>
        <Gap className='h-3' />
        <p className='text-white text-lg ml-10 font-semibold'>Top Picks For You :</p>
        <Gap className='h-5' />
        <ListCarouselMovie movies={props.nowPlaying.results} />
      </article>
    </section>
  )
}

export default NowPlaying
