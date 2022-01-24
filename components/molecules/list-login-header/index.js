import { BiSearch } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const ListLoginHeader = () => {
  return (
    <ul className='flex items-center justify-end gap-5 lg:flex-row flex-col'>
      <li className='border-b w-full border-gray-500 flex justify-between lg:py-2 py-3'>
         <input type="text" className='bg-transparent outline-none ' placeholder='Search' />
         <button><BiSearch className='text-3xl lg:text-2xl'/></button>
      </li>
      <li className='lg:block hidden'><button className='bg-blue-700 px-3 py-2 rounded-md uppercase font-bold text-sm'>Subscribe</button></li>
      <li className='lg:block hidden'><button className='flex items-center gap-1 border py-1 px-2 rounded-md border-gray-500'><BsGlobe />English <MdOutlineKeyboardArrowDown /></button></li>
      <li className='uppercase font-semibold lg:block hidden'>Login</li>
    </ul>
  )
}

export default ListLoginHeader
