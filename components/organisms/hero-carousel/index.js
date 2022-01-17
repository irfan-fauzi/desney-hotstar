import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { Gap, ItemCarouselHero, NextArrowHero, PrevArrowHero } from '../..'
import CONFIG from '../../../utils/config/config'



const BannerCarousel = ({ nowPlaying }) => {
  
  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  const settingsLists = {
    
    dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 4000,
      cssEase: "ease-in",
    prevArrow: <PrevArrowHero />,
    nextArrow: <NextArrowHero />,
    
  }
  return (
    <div>
      <Gap className='h-[4rem]' />
      <Slider {...settingsLists}>
      {
         movieNowPlaying.map(movie => (

           <div key={movie.id} className='bg-gradient-slider-top'>
              <ItemCarouselHero  movie={movie} />
              <Link href={`/detail/${movie.id}`} >
                <a>
                  <article className='block lg:hidden px-5 w-full relative -top-36'>
                    <div className='border inline-block p-[2px] rounded-lg bg-white'>
                      <Image src={CONFIG.BASE_IMAGE_URL + movie.poster_path} width={150} height={200} className='rounded-lg'/>
                    </div>
                    <Gap className='h-3' />
                    <p className='text-white text-2xl font-bold text-left'>{movie.original_title}</p>
                    <Gap className='h-1' />
                    <p className='text-left text-gray-400 font-bold text-lg'>{movie.release_date.slice(0, 4)}</p>
                    <Gap className='h-4' />        
                   
                  </article>
                </a>
              </Link>
           </div>
         ))
       }
      </Slider>
     
    </div>
  )
}

export default BannerCarousel
