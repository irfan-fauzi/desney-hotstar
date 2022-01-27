import { useContext } from "react";
import { Gap, RatingStar } from "../../..";
import { MovieContext } from "../../../../utils/config/context";
import Genre from "../../detail-desktop/genre";
import Crews from "../../detail-desktop/movie-detail/crew";

const TitleGenreSinopsis = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)

  return (
    <article className="bg-gradient-slider-top rounded-t-2xl p-3">
      <Gap className='h-2' />
      <h1 className="text-white text-2xl font-bold">{detailMovie.title} <span className='font-normal text-xl'>({detailMovie.release_date.slice(0, 4)})</span></h1>
      <Gap className='h-2' />
      <RatingStar />
      <Gap className='h-3' />
      <Genre />
      <Gap className='h-5' />
      <p className="text-gray-50 font-light leading-6">{detailMovie.overview}</p>
      <Gap className='h-10' />
      <Crews className={'flex gap-10'} />
      
    </article>
  )
};

export default TitleGenreSinopsis;
