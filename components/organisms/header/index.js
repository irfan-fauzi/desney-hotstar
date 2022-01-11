import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <nav className='px-10 py-2 text-gray-300 text-[1.1rem]'>
        <div className="flex items-center gap-3 ">
          <div className='w-1/12 '>
            <Image src="/assets/images/logo.svg" width={100} height={50} alt='logo' />
          </div>
          <div className='w-5/12 font-semibold '>
            <ul className='flex gap-10'>
              <li>Series</li>
              <li>Movies</li>
              <li>Desney+</li>
              <li>Local</li>
            </ul>
          </div>
          <div className='w-6/12'>
            <ul className='flex items-center justify-end gap-5 '>
              <li className='border-b w-full flex justify-between'>
                <input type="text" className='bg-transparent outline-none ' placeholder='Search' />
                <button><BiSearch /></button>
              </li>
              <li><button className='bg-blue-700 px-3 py-2 rounded-md uppercase font-bold text-sm'>Subscribe</button></li>
              <li><button className='flex items-center gap-1 border py-1 px-2 rounded-md border-gray-500'><BsGlobe />English <MdOutlineKeyboardArrowDown /> </button></li>
              <li className='uppercase font-bold text-md'>Login</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
