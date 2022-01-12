import Image from 'next/image'
import CONFIG from "../../../utils/config/config"


const MoviesThumbnail = ({movie}) => {
  return (
    <div>
      <div className='container-image'>
         <Image src={CONFIG.BASE_IMAGE_URL + movie.poster_path}  alt="title" className='inside-img' layout='fill' />
      </div>
    </div>
  )
}

export default MoviesThumbnail
