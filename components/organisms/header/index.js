import { MainLogo, ListMenuHeader, ListLoginHeader } from '../../'

const Header = () => {
  return (
    <div>
      <nav className='px-10 py-2 text-gray-300 text-[1.1rem]'>
        <div className="flex items-center gap-3 ">
          <div className='w-1/12 '>
            <MainLogo />
          </div>
          <div className='w-5/12 font-semibold '>
            <ListMenuHeader />
          </div>
          <div className='w-6/12'>
            <ListLoginHeader />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
