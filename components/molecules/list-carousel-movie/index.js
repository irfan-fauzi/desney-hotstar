
import Image from 'next/image'
import Slider from 'react-slick'
import { MoviesThumbnail } from '../..'
import CONFIG from '../../../utils/config/config'

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='border block w-7 h-full cursor-pointer absolute right-0 z-10 top-0'
      onClick={onClick}
    >s</div>
  );
  
}

 
const NextArrow = (props) => {
  const {onClick} = props
  return (
  <div
      className='border block w-7 h-full cursor-pointer absolute left-0 z-10 top-0'
      onClick={onClick}
    >s</div>
  )
}

const ListCarouselMovie = ({ movies }) => {
  const myMovie = movies
  const movieListFirst = myMovie.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )

 

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }
  return (
    <div className='border'>
    <h2> Single Item</h2>
    
    <Slider {...sliderSettings}>
      
    </Slider>
  </div>
  )
}

export default ListCarouselMovie
