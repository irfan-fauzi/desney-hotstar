import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const PrevArrowHero = (props) => {
  const {onClick} = props
  return (
  <div
      className='flex items-center justify-start w-10 h-full cursor-pointer absolute left-0 z-10 top-0  transition lg:-translate-x-5 ease-in-out delay-50 lg:bg-gradient-slider-left lg:hover:translate-x-0  duration-300 '
      onClick={onClick}
    ><BsChevronCompactLeft className='lg:text-transparent lg:hover:text-white transition text-yellow-400 text-lg lg:text-3xl relative -top-30 lg:-top-40 lg:static' /></div>
  )
}

export default PrevArrowHero
