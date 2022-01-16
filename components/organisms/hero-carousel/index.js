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

           <div key={movie.id} className='border'>
              <ItemCarouselHero  movie={movie} />
              <Link href={`/detail/${movie.id}`} >
                <a>
                  <article className='block lg:hidden px-2 w-full'>
                    <Gap className='h-5' />
                    <p className='text-blue-400 text-2xl font-bold text-left w-9/12'>{movie.original_title}</p>
                    <Gap className='h-2' />
                    <p className='text-left text-gray-400 font-bold text-lg'>{movie.release_date.slice(0, 4)}</p>
                    <Gap className='h-2' />        
                    <p className='line-clamp-3 font-light text-blue-200 text-left w-10/12'>{movie.overview}</p>
                    
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
