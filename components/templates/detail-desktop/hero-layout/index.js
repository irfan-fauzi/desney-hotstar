import CONFIG from "../../../../utils/config/config";


const HeroLayout = ({children, reqDetail}) => {
  return (
    <div className='w-full h-[550px] bg-no-repeat bg-cover after:content-[""] relative after:absolute after:top-0 after:w-full after:bg-gray-900 after:h-full after:opacity-90' style={{backgroundImage: `url(${CONFIG.BASE_IMAGE_URL + reqDetail.backdrop_path})`}}>
      { children }
    </div>
  )
}

export default HeroLayout;
