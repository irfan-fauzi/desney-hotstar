import CONFIG from "../../../../utils/config/config"
import Link from 'next/link'
import Image from 'next/image'

const ImagePart = ({movie}) => {
  return (
    
      <div className='lg:w-7/12 w-full '>
        <Link href={`/detail/${movie.id}`}>
        <a>
        <picture>
        <source media="(max-width: 600px)" srcSet={CONFIG.BASE_IMAGE_URL_500 + movie.backdrop_path} type="image/jpeg" />
        <img src={CONFIG.BASE_IMAGE_URL + movie.backdrop_path} className="w-full rounded-xl"/>
        </picture>
        
        </a>
        </Link> 
       
    </div>
    
  )
}

export default ImagePart
