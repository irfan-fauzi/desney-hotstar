import { MainLogo, ListMenuHeader, ListLoginHeader } from '../../'

const Header = () => {
  return (
    <div className='fixed top-0 z-40 bg-gray-900 w-full'>
      <nav className='lg:px-10 px-1 py-2 text-gray-300 text-[1.1rem]'>
        <div className="flex items-center gap-3 ">
          <div className='lg:w-1/12'>
            <MainLogo />
          </div>
          <div className='lg:w-5/12 font-semibold lg:block hidden'>
            <ListMenuHeader />
          </div>
          <div className='lg:w-6/12 lg:block hidden'>
            <ListLoginHeader />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
