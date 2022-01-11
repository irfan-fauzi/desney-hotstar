import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Gap, ListCarouselMovie } from '../..'

const Upcoming = (props) => {
  
  return (
    <section className='mt-[-1.5rem]'>
      <article>
      <p className='text-white text-lg ml-10 font-semibold'>Coming Soon :</p>
      <Gap className='h-5' />
      <ListCarouselMovie movies={props.upComing.results} />
      </article>
    </section>
  )
}

export default Upcoming
