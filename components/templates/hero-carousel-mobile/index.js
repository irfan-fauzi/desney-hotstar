import Link from 'next/link'
import Image from 'next/image'
import { Gap } from '../..'
import CONFIG from '../../../utils/config/config'


const HeroCarouselMobile = ({movie}) => {
  return (
    <Link href={`/detail/${movie.id}`} >
    <a>
      <article className='block lg:hidden px-5 w-full relative -top-36'>
        <div className='border inline-block p-[2px] rounded-lg bg-white'>
          <Image src={CONFIG.BASE_IMAGE_URL_500 + movie.poster_path} width={150} height={200} className='rounded-lg'/>
        </div>
        <Gap className='h-3' />
        <p className='text-white text-2xl font-bold text-left'>{movie.original_title}</p>
        <Gap className='h-1' />
        <p className='text-left text-gray-400 font-bold text-lg'>{movie.release_date.slice(0, 4)}</p>
        <Gap className='h-4' />        
       
      </article>
    </a>
  </Link>
  )
}

export default HeroCarouselMobile
