import { BsStarFill } from 'react-icons/bs'

const RatingStar = () => {
  const star = [1,2,3,4,5]
  return (
    <div className='flex gap-2 '>
      {star.map(el => (
        <BsStarFill key={el} className={star.indexOf(el) > 3 ? `text-white` : `text-red-400`} />
      ))}
    </div>
  )
};

export default RatingStar;
