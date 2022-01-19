import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const PrevArrow = (props) => {
  const {onClick} = props
  return (
  <div
      className='flex items-center justify-start w-10 h-full cursor-pointer absolute left-0 z-10 top-0 bg-gradient-slider-left '
      onClick={onClick}
    ><BsChevronCompactLeft size={40} className='text-transparent hover:text-white transition' /></div>
  )
}

export default PrevArrow
