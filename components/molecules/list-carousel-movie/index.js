import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { MoviesThumbnail } from '../..'


const ListCarouselMovie = ({ movies }) => {
  const myMovie = movies
  const movieListFirst = myMovie.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )

  return (
    <Carousel
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div className='grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2'>
         {movieListFirst.map(movie => (
            <MoviesThumbnail key={movie.id} movie={movie} />
          ))}
      </div>
      <div className='grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2'>
          {movieListSecond.map(movie => (
            <MoviesThumbnail key={movie.id} movie={movie} />
          ))}
      </div>
      
      
    </Carousel>
  )
}

export default ListCarouselMovie
