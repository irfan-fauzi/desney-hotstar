import { useContext } from "react";
import { MovieContext } from "../../../../utils/config/context";

const Genre = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  return (
    <div className='flex gap-4'>
      {detailMovie.genres.map(genre => (
         <p key={genre.name} className='text-gray-200 uppercase text-[0.8rem]'>{genre.name}</p>))}
    </div>
  )
};

export default Genre;
