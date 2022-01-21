import { useContext } from "react";
import CONFIG from "../../../../utils/config/config";
import { MovieContext } from "../../../../utils/config/context";


const HeroLayout = ({children}) => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  
  return (
    <div className='w-full h-[550px] bg-no-repeat bg-cover after:content-[""] relative after:absolute after:top-0 after:w-full after:bg-gray-900 after:h-full after:opacity-90' style={{backgroundImage: `url(${CONFIG.BASE_IMAGE_URL + detailMovie.backdrop_path})`}}>
      { children }
    </div>
  )
}

export default HeroLayout;
