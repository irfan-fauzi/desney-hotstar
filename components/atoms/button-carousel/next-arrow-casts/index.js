import {BsChevronCompactRight} from 'react-icons/bs'

const NextArrowCast = (props) => {
  const { onClick } = props;
  return (
  <div className='flex items-center justify-end w-10 h-full cursor-pointer absolute right-0 z-10 top-0 bg-gradient-button-casts'
  onClick={onClick}><BsChevronCompactRight size={30} className='text-black transition' /></div>
 )
};

export default NextArrowCast;
