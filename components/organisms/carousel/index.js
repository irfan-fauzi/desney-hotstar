import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useEffect, useState } from 'react'
import CONFIG from '../../../utils/config/config'
import { Gap } from '../..'


const BannerCarousel = ({ nowPlaying }) => {

  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  return (
    <div>
      <Carousel 
        
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={9000}
        >
      
      {
         movieNowPlaying.map(el => (
           <div className='flex flex-row-reverse relative lg:after:content-["satu"] lg:after:bg-gradient lg:after:absolute lg:after:top-0 lg:after:left-0 lg:after:h-full lg:after:w-full'>
             <div className='lg:w-7/12 w-full after:content-[""] relative after:absolute after:w-full after:bg-black after:bottom-0 after:left-0 after:h-[3rem] after:opacity-70'>
              <img src={CONFIG.BASE_IMAGE_URL + el.backdrop_path} alt="" />
              <p className='lg:hidden absolute text-gray-300 bottom-[0.5rem] z-10 left-0 right-0 font-bold'>{el.original_title}</p>
             </div>
            <div className='lg:w-5/12 hidden text-white relative z-10 lg:flex items-center '>
              <div className='px-10'>
                <h1 className='text-3xl text-left font-bold'>{el.original_title}</h1>
                <Gap className='h-3' />
                <p className='text-left text-gray-400 font-semibold'>Release date : {el.release_date}</p>
                <Gap className='h-3' />
                <p className='text-left text-gray-400 text-md'>{el.overview}</p>
              </div>  
            </div>
           </div>
         ))
       }
      </Carousel>
     
    </div>
  )
}

export default BannerCarousel
