import CONFIG from "../../../../utils/config/config"


const ImagePart = ({movie}) => {
  return (
    <div className='lg:after:hidden lg:w-7/12 w-full after:content-[""] relative after:absolute after:w-full after:bg-black after:bottom-0 after:left-0 after:h-[3rem] after:opacity-10 '>
       <img src={CONFIG.BASE_IMAGE_URL + movie.backdrop_path} className="w-full"/>
       
    </div>
  )
}

export default ImagePart
