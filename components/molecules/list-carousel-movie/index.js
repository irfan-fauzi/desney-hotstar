
import Image from 'next/image'
import Slider from 'react-slick'
import { MoviesThumbnail } from '../..'
import CONFIG from '../../../utils/config/config'

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='border block w-7 h-full cursor-pointer absolute right-0 z-10 top-0'
      onClick={onClick}
    >s</div>
  );
  
}

 
const PrevArrow = (props) => {
  const {onClick} = props
  return (
  <div
      className='border block w-7 h-full cursor-pointer absolute left-0 z-10 top-0'
      onClick={onClick}
    >s</div>
  )
}

const ListCarouselMovie = ({ movies }) => {
  const myMovie = [...movies]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ] 
  }
  return (
    
    <Slider {...settings}>
      {
        myMovie.map(movie => (
          <MoviesThumbnail movie={movie} />
        ))
      }
    </Slider>
  
  )
}

export default ListCarouselMovie
