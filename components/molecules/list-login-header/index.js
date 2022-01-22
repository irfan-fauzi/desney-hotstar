import { BiSearch } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const ListLoginHeader = () => {
  return (
    <ul className='flex items-center justify-end gap-5 '>
      <li className='border-b w-full border-gray-500 flex justify-between'>
         <input type="text" className='bg-transparent outline-none ' placeholder='Search' />
         <button><BiSearch /></button>
      </li>
      <li><button className='bg-blue-700 px-3 py-2 rounded-md uppercase font-bold text-sm'>Subscribe</button></li>
      <li><button className='flex items-center gap-1 border py-1 px-2 rounded-md border-gray-500'><BsGlobe />English <MdOutlineKeyboardArrowDown /> </button></li>
      <li className='uppercase font-semibold '>Login</li>
    </ul>
  )
}

export default ListLoginHeader
