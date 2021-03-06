import Image from 'next/image';
import Slider from 'react-slick'
import { Gap, NextArrowCast, PrevArrowCast } from '../..'
import CONFIG from '../../../utils/config/config';
import { useContext } from 'react';
import { MovieContext } from '../../../utils/config/context';


const ListActors = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const movieCasts = detailMovie.credits.cast
  const settingsLists = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 5,
    prevArrow: <PrevArrowCast />,
    nextArrow: <NextArrowCast />,
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
        movieCasts.map(cast => (
          <div key={cast.name} className='p-2'>
          <div className='container-image '>
                <Image src={CONFIG.BASE_IMAGE_URL_500 + cast.profile_path}  alt="title" className='inside-img rounded-lg border' layout='fill'/>
                <Gap className='h-2' />
                <p className='font-bold text-gray-800 text-sm'>{cast.name}</p>
                <p className='text-gray-700 text-sm'>{cast.character}</p>
          </div>
        </div>
        ))
      }
    </Slider>
  );
};

export default ListActors;
