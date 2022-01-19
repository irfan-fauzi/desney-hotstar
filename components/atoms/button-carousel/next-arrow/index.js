import {BsChevronCompactRight} from 'react-icons/bs'

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='flex items-center justify-end w-10 h-full cursor-pointer absolute right-0 z-10 top-0 bg-gradient-slider-right'
      onClick={onClick}
    ><BsChevronCompactRight size={40} className='text-transparent hover:text-white transition' /></div>
  );
}

export default NextArrow
