import {BsChevronCompactRight} from 'react-icons/bs'

const NextArrowHero = (props) => {
  const { onClick } = props;
  return (
    <div
      className='flex items-center justify-end w-10 h-full cursor-pointer absolute right-0 z-10 top-0 lg:translate-x-6  transition  ease-in-out delay-50 lg:bg-gradient-slider-right hover:translate-x-0  duration-300 '
      onClick={onClick}
    ><BsChevronCompactRight className='lg:text-white lg:hover:text-white transition text-yellow-400 text-lg lg:text-3xl relative -top-30 lg:-top-40 lg:static' /></div>
  );
}

export default NextArrowHero
