import Image from 'next/image'
import Link from 'next/link'
import CONFIG from "../../../utils/config/config"


const MoviesThumbnail = ({movie}) => {
  return (
    <div className='px-2'>
      <div className='container-image '>
        <Link href={`/detail/${movie.id}`}>
          <a>
            <Image src={CONFIG.BASE_IMAGE_URL + movie.poster_path}  alt="title" className='inside-img rounded-lg' layout='fill' />
         </a>
         </Link>
      </div>
    </div>
  )
}

export default MoviesThumbnail
