import { useContext } from 'react';
import { BsStarFill } from 'react-icons/bs'
import { MovieContext } from '../../../utils/config/context';

const RatingStar = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const star = [1,2,3,4,5]
  return (
    <div className='flex items-center gap-4'>
      <div className='flex gap-2 '>
        {star.map(el => (
          <BsStarFill key={el} className={star.indexOf(el) > 3 ? `text-white` : `text-red-400`} />
        ))}
      </div>
      <div>
        <p className='text-white font-semibold'>{detailMovie.vote_average}</p>
      </div>
    </div>
  )
};

export default RatingStar;
