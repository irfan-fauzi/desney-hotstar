import Slider from 'react-slick'
import { MoviesThumbnail, NextArrow, PrevArrow } from '../..'


const ListCarouselMovie = ({ movies }) => {
  const myMovie = [...movies]
  const settingsLists = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ] 
  }
  
  return (
    <Slider {...settingsLists}>
      {
        myMovie.map(movie => (
          <MoviesThumbnail movie={movie} key={movie.id}/>
        ))
      }
    </Slider>
  
    
    
  )
}

export default ListCarouselMovie
