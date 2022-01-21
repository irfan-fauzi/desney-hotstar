import { useContext } from "react";
import CONFIG from "../../../../utils/config/config";
import { MovieContext } from "../../../../utils/config/context";

const MovieImage = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  return (
    <section>
      <div className='w-[300px]'>
       <img src={CONFIG.BASE_IMAGE_URL_500 + detailMovie.poster_path} className='block rounded-lg'/>
      </div>
    </section> 
  )
};

export default MovieImage;
