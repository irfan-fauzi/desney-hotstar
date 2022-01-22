import CONFIG from "../../../../utils/config/config"


const ImagePart = ({movie}) => {
  return (
    <div className='lg:after:hidden lg:w-7/12 w-full after:content-[""] relative after:absolute after:w-full after:bg-black after:bottom-0 after:left-0 after:h-full after:opacity-80 '>
      <picture>
      <source media="(max-width: 600px)" srcset={CONFIG.BASE_IMAGE_URL_500 + movie.backdrop_path} type="image/jpeg" />
       <img src={CONFIG.BASE_IMAGE_URL + movie.backdrop_path} className="w-full"/>
      </picture> 
       
    </div>
  )
}

export default ImagePart
