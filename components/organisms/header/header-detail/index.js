import { Container, ListLoginHeader, ListMenuHeader, MainLogo } from "../../.."

const HeaderDetail = () => {
  return (
    <div className='fixed top-0 z-40 lg:bg-gray-900 hidden lg:block w-full'>
     <Container> 
      <nav className="pt-3">
        <div className="flex items-center gap-3 text-gray-300 text-[1.1rem]">
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
    </Container>
  </div>
  )
}

export default HeaderDetail
