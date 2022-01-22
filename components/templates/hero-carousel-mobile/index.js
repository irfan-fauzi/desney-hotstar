import Link from 'next/link'
import Image from 'next/image'
import { Gap } from '../..'
import CONFIG from '../../../utils/config/config'


const HeroCarouselMobile = ({movie}) => {
  return (
    <Link href={`/detail/${movie.id}`} >
    <a>
      <article className='block lg:hidden px-5 w-full relative -top-32 '>        
        <p className='text-white text-lg font-semibold text-left'>{movie.original_title}</p>
        <Gap className='h-1' />
        <p className='text-left text-gray-400 font-bold text-sm'>{movie.release_date.slice(0, 4)}(US)</p>
        <Gap className='h-1' />
        <p className='line-clamp-2 text-gray-200 text-sm italic'>{movie.overview}</p>
        <Gap className='h-4' />        
       
      </article>
    </a>
  </Link>
  )
}

export default HeroCarouselMobile
