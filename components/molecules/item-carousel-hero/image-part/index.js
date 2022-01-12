import CONFIG from "../../../../utils/config/config"


const ImagePart = ({movie}) => {
  return (
    <div className='lg:after:hidden lg:w-7/12 w-full after:content-[""] relative after:absolute after:w-full after:bg-black after:bottom-0 after:left-0 after:h-[3rem] after:opacity-70'>
       <img src={CONFIG.BASE_IMAGE_URL + movie.backdrop_path} alt="" />
       <p className='lg:hidden absolute text-gray-300 bottom-[0.5rem] z-10 left-0 right-0 font-bold'>{movie.original_title}</p>
    </div>
  )
}

export default ImagePart
