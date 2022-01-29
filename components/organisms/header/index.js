import { useContext } from 'react'
import { MainLogo, ListMenuHeader, ListLoginHeader } from '../../'
import { showMenuContext } from '../../../utils/config/context'


const Header = () => {
  const [showMenu, setShowMenu] = useContext(showMenuContext)
  
  return (
    <div>
      
    <div className={`fixed  lg:top-0 lg:right-0 ${showMenu ? `right-0` : `right-[100rem]`} z-50 bg-gray-800  lg:block w-full h-screen lg:h-auto transition-all`}>
      <nav className='lg:px-10 px-1 py-3 text-gray-300 text-[1.1rem] mt-[8rem] lg:mt-0'>
        <div className="flex items-center lg:flex-row flex-col-reverse lg:gap-5 gap-10">
          <div className='lg:w-1/12'>
            <MainLogo />
          </div>
          <div className='lg:w-5/12 font-semibold lg:block '>
            <ListMenuHeader />
          </div>
          <div className='lg:w-6/12 lg:block'>
            <ListLoginHeader />
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header
