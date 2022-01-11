import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Gap } from '../..'
import CONFIG from '../../../utils/config/config'


const ListCarouselMovie = ({ movieListFirst, movieListSecond }) => {
  return (
    <Carousel>
      <div className='grid grid-cols-10 gap-2'>
         {
           movieListFirst.map(el => (
            <div key={el.id}>
                  <div className='container-image'>
                    <Image src={CONFIG.BASE_IMAGE_URL + el.poster_path}  alt="title" className='inside-img' layout='fill' />
                  </div>
                </div>
              ))
            }
          </div>
          <div className='grid grid-cols-10 gap-2'>
            {
              movieListSecond.map(el => (
                <div key={el.id}>
                  <div className='container-image'>
                    <Image src={CONFIG.BASE_IMAGE_URL + el.poster_path}  alt="title" className='inside-img' layout='fill' />
                  </div>
                </div>
              ))
            }
          </div>
    </Carousel>
  )
}

export default ListCarouselMovie
