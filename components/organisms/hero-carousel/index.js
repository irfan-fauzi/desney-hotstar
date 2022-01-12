import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ItemCarouselHero } from '../..'


const BannerCarousel = ({ nowPlaying }) => {

  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  return (
    <div>
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
           <ItemCarouselHero key={movie.id} movie={movie} />
         ))
       }
      </Carousel>
     
    </div>
  )
}

export default BannerCarousel
