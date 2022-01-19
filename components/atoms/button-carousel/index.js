import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='flex items-center justify-end w-10 h-full cursor-pointer absolute right-0 z-10 top-0 bg-gradient-slider-right'
      onClick={onClick}
    ><BsChevronCompactRight size={40} className='text-transparent hover:text-white transition' /></div>
  );
  
}

 
export const PrevArrow = (props) => {
  const {onClick} = props
  return (
  <div
      className='flex items-center justify-start w-10 h-full cursor-pointer absolute left-0 z-10 top-0 bg-gradient-slider-left '
      onClick={onClick}
    ><BsChevronCompactLeft size={40} className='text-transparent hover:text-white transition' /></div>
  )
}

export const PrevArrowHero = (props) => {

}

export const NextArrowHero = (props) => {
  const { onClick } = props;
  return (
    <div
      className='flex items-center justify-end w-10 h-full cursor-pointer absolute right-0 z-10 top-0 lg:translate-x-6  transition  ease-in-out delay-50 lg:bg-gradient-slider-right hover:translate-x-0  duration-300 '
      onClick={onClick}
    ><BsChevronCompactRight className='lg:text-transparent lg:hover:text-white text-white transition text-3xl relative -top-40 lg:static' /></div>
  );
  
}