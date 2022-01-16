import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Gap, ItemCarouselHero } from '../..'


const BannerCarousel = ({ nowPlaying }) => {

  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  
  return (
    <div>
      <Gap className='h-[5rem]' />
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

           <div key={movie.id}>
              <ItemCarouselHero  movie={movie} />
              <Link href={`/detail/${movie.id}`} >
                <a>
                  <article className='block lg:hidden  px-2 py-4 w-full'>
                    <Gap className='h-2' />
                    <p className='text-blue-400 text-2xl font-semibold text-left w-9/12'>{movie.original_title}</p>
                    <Gap className='h-2' />        
                    <p className='line-clamp-3 font-light text-blue-200 text-left'>{movie.overview}</p>
                    
                  </article>
                </a>
              </Link>
           </div>
         ))
       }
      </Carousel>
     
    </div>
  )
}

export default BannerCarousel
