import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Gap } from '../..'
import CONFIG from "../../../utils/config/config"


const NowPlaying = (props) => {
  const movies = props.nowPlaying.results
  const movieListFirst = movies.filter(el => movies.indexOf(el) < 10)
  const movieListSecond = movies.filter(el => movies.indexOf(el) > 9 )
  return (
    <section>
      <article>
        <Gap className='h-3' />
        <p className='text-white text-lg ml-10 font-semibold'>Top Picks For You :</p>
        <Gap className='h-5' />
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
        <Gap className='h-5' />
      </article>
    </section>
  )
}

export default NowPlaying
