import {BsChevronCompactLeft} from 'react-icons/bs'

const PrevArrowCast = (props) => {
  const {onClick} = props
  return (
  <div className='flex items-center justify-start w-10 h-full cursor-pointer absolute left-0 z-10 top-0 bg-transparent' onClick={onClick}
    ><BsChevronCompactLeft size={30} className='text-black' /></div>
  )
};

export default PrevArrowCast;
