import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Gap, ItemCarouselHero } from '../..'


const BannerCarousel = ({ nowPlaying }) => {

  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  return (
    <div className=''>
      <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={9000}
        >
      {
         movieNowPlaying.map(movie => (
           <div className=''>
              <ItemCarouselHero key={movie.id} movie={movie} />
              <article className='block lg:hidden bg-gradient-mobile px-2 py-4 w-full'>
                <p className='text-white md:text-4xl text-xl font-semibold text-center'>{movie.original_title}</p>
                <Gap className='h-5 hidden md:block' />
                <p className='truncate text-ellipsis text-clip  font-light text-white md:font-normal md:w-10/12 md:mx-auto '>{movie.overview}</p>
                <Gap className='h-3' />
                <button className='text-gray-100 rounded-md px-4 py-2 text-left bg-red-700 md:text-lg'>watch now</button>
                <Gap className='h-3' />
              </article>
           </div>
         ))
       }
      </Carousel>
     
    </div>
  )
}

export default BannerCarousel
