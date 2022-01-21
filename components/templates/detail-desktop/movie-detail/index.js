import { useContext } from "react";
import { Gap, RatingStar } from "../../..";
import { MovieContext } from "../../../../utils/config/context";
import Genre from "../genre";
import Crews from "./crew";

const MovieDetail = () => {
  const  [detailMovie, setDetailMovie] = useContext(MovieContext)
  const dateRealese = new Date(detailMovie.release_date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
  return (
    <section className='w-8/12'>
      <h1 className='text-[2rem] text-white font-bold'>{detailMovie.title} <span className='font-normal text-3xl'>({detailMovie.release_date.slice(0, 4)})</span></h1>
      <p className='text-gray-100 text-lg'>Release : {dateRealese}(US)</p>
      <Gap className='h-2' />
      <RatingStar />
      <Gap className='h-2' />
      <Genre />
      <Gap className='h-2' />
      <p className='text-white font-semibold text-xl'>Sinopsis :</p>
      <Gap className='h-2' />
      <p className='text-white w-11/12'>{detailMovie.overview}</p>
      <Gap className='h-5' />
      <Crews className={'flex gap-20 w-10/12'}/>         
    </section>
  )
};

export default MovieDetail;
