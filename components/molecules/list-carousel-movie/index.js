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
    centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
			rows: 2,
			slidesPerRow: 2
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
