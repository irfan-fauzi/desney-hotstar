import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import Slider from 'react-slick'
import { MoviesThumbnail } from '../..'
import CONFIG from '../../../utils/config/config'


const ListCarouselMovie = ({ movies }) => {
  const myMovie = movies
  const movieListFirst = myMovie.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )

  const sliderSettings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
  }
  return (
    <Slider {...sliderSettings}>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>1</p>
      </div>

    </Slider>
  )
}

export default ListCarouselMovie
